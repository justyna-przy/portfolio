import { createContext } from 'react';

export const ThemeContext = createContext({
  // The toggle function gets overridden at runtime
  toggleTheme: () => {},
});
