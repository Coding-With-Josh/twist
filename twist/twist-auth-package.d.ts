declare module 'twist-auth-package' {
  export interface OAuthServerOptions {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    authorizationPath: string;
    tokenPath: string;
    scope: string | string[];
    state?: string;
    grantType: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token';
    responseType: 'code' | 'token';
    accessTokenLifetime: number;
    refreshTokenLifetime: number;
    allowExtendedTokenAttributes: boolean;
    requireClientAuthentication: boolean;
    alwaysIssueNewRefreshToken: boolean;
    allowBearerTokensInQueryString: boolean;
  }

  export interface OAuthServer {
    app: any;
    authenticate(req: any, res: any, next?: (error?: any) => void): void;
    authorize(req: any, res: any, next: (error?: any) => void): void;
    token(req: any, res: any, next: (error?: any) => void): void;
  }

  export default function createOAuthServer(options: OAuthServerOptions): OAuthServer;
}