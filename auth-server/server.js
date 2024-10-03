require('dotenv').config();
const express = require('express');
const OAuth2Server = require('oauth2-server');
const { Pool } = require('pg');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const app = express();

// Database setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

// Security middleware (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// CORS setup
const corsOptions = {
  origin: [process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === 'production' ? 100 : 1000
});
app.use(limiter);

// OAuth server setup
const oauth = new OAuth2Server({
  model: {
    getClient: async (clientId, clientSecret) => {
      const { rows } = await pool.query('SELECT * FROM oauth_clients WHERE client_id = $1', [clientId]);
      if (rows[0] && await bcrypt.compare(clientSecret, rows[0].client_secret)) {
        return { id: rows[0].id, grants: rows[0].grants };
      }
      return null;
    },
    saveAuthorizationCode: async (code, client, user) => {
      await pool.query('INSERT INTO oauth_auth_codes (code, client_id, user_id, expires_at) VALUES ($1, $2, $3, $4)', 
        [code.authorizationCode, client.id, user.id, code.expiresAt]);
      return code;
    },
    getAuthorizationCode: async (authorizationCode) => {
      const { rows } = await pool.query('SELECT * FROM oauth_auth_codes WHERE code = $1', [authorizationCode]);
      if (rows[0]) {
        return {
          code: rows[0].code,
          client: { id: rows[0].client_id },
          user: { id: rows[0].user_id },
          expiresAt: rows[0].expires_at
        };
      }
      return null;
    },
    revokeAuthorizationCode: async (code) => {
      const result = await pool.query('DELETE FROM oauth_auth_codes WHERE code = $1', [code.code]);
      return result.rowCount > 0;
    },
    saveToken: async (token, client, user) => {
      await pool.query('INSERT INTO oauth_tokens (access_token, access_token_expires_at, refresh_token, refresh_token_expires_at, client_id, user_id) VALUES ($1, $2, $3, $4, $5, $6)', 
        [token.accessToken, token.accessTokenExpiresAt, token.refreshToken, token.refreshTokenExpiresAt, client.id, user.id]);
      return {
        accessToken: token.accessToken,
        accessTokenExpiresAt: token.accessTokenExpiresAt,
        refreshToken: token.refreshToken,
        refreshTokenExpiresAt: token.refreshTokenExpiresAt,
        client: { id: client.id },
        user: { id: user.id }
      };
    },
    getAccessToken: async (accessToken) => {
      const { rows } = await pool.query('SELECT * FROM oauth_tokens WHERE access_token = $1', [accessToken]);
      if (rows[0]) {
        return {
          accessToken: rows[0].access_token,
          accessTokenExpiresAt: rows[0].access_token_expires_at,
          client: { id: rows[0].client_id },
          user: { id: rows[0].user_id }
        };
      }
      return null;
    },
    getRefreshToken: async (refreshToken) => {
      const { rows } = await pool.query('SELECT * FROM oauth_tokens WHERE refresh_token = $1', [refreshToken]);
      if (rows[0]) {
        return {
          refreshToken: rows[0].refresh_token,
          refreshTokenExpiresAt: rows[0].refresh_token_expires_at,
          client: { id: rows[0].client_id },
          user: { id: rows[0].user_id }
        };
      }
      return null;
    },
    revokeToken: async (token) => {
      const result = await pool.query('DELETE FROM oauth_tokens WHERE refresh_token = $1', [token.refreshToken]);
      return result.rowCount > 0;
    },
    validateScope: (user, client, scope) => {
      // Implement scope validation logic
      return scope;
    },
    verifyScope: (token, scope) => {
      // Implement scope verification logic
      return true;
    },
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('Twist OAuth Server is running');
});

// OAuth routes
app.get('/oauth/authorize', async (req, res) => {
  // Implement proper login page and user authentication
  res.send(`
    <form method="post" action="/oauth/authorize">
      <input type="hidden" name="client_id" value="${req.query.client_id}">
      <input type="hidden" name="redirect_uri" value="${req.query.redirect_uri}">
      <input type="hidden" name="response_type" value="${req.query.response_type}">
      <input type="hidden" name="state" value="${req.query.state}">
      <button type="submit">Authorize</button>
    </form>
  `);
});

app.post('/oauth/authorize', async (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  try {
    const authorizationCode = await oauth.authorize(request, response, {
      authenticateHandler: {
        handle: () => ({ id: 1, username: 'testuser' }) // Replace with real user authentication
      }
    });
    res.redirect(`${req.body.redirect_uri}?code=${authorizationCode.authorizationCode}&state=${req.body.state}`);
  } catch (err) {
    console.error(err);
    res.status(err.code || 500).json(err);
  }
});

app.post('/oauth/token', async (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  try {
    const token = await oauth.token(request, response);
    res.json(token);
  } catch (err) {
    console.error(err);
    res.status(err.code || 500).json(err);
  }
});

// Client registration route (only for development)
if (process.env.NODE_ENV !== 'production') {
  app.post('/register-client', async (req, res) => {
    const { name, redirectUri } = req.body;
    const clientId = crypto.randomBytes(16).toString('hex');
    const clientSecret = crypto.randomBytes(32).toString('hex');
    const hashedSecret = await bcrypt.hash(clientSecret, 10);

    try {
      await pool.query(
        'INSERT INTO oauth_clients (client_id, client_secret, name, redirect_uri, grants) VALUES ($1, $2, $3, $4, $5)',
        [clientId, hashedSecret, name, redirectUri, ['authorization_code', 'refresh_token']]
      );
      res.json({ clientId, clientSecret });
    } catch (error) {
      console.error('Error registering client:', error);
      res.status(500).json({ error: 'Failed to register client' });
    }
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Twist OAuth server running on http://localhost:${PORT}`);
  if (process.env.NODE_ENV !== 'production') {
    console.log('Warning: Running in development mode. Do not use in production without HTTPS.');
  }
});