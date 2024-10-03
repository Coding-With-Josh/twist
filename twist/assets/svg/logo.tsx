export const LogoSvg = () => (
  <svg width="30" height="50" viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="50%" stopColor="#0000FF" />
        <stop offset="100%" stopColor="#4C00FF" />
      </linearGradient>
    </defs>
    <path d="M30,20 C45,20 60,30 60,45 C60,60 45,70 30,70 C15,70 0,60 0,45 C0,30 15,20 30,20 M30,80 C45,80 60,70 60,55 C60,40 45,30 30,30 C15,30 0,40 0,55 C0,70 15,80 30,80" 
          fill="none" 
          stroke="url(#infinityGradient)" 
          strokeWidth="4"/>
  </svg>
);