import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 8px; /* Base font size for extra-small screens */
    
    @media (min-width: 600px) {
      font-size: 9px; /
    }
    
    @media (min-width: 900px) {
      font-size: 12px; 
    }

    
    
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }
`;
