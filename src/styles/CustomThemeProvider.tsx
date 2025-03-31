// ThemeProviderWrapper.tsx
import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { green, red } from '@mui/material/colors';

function getDesignTokens(mode: 'light' | 'dark') {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: {
              default: '#f0f0f0',
              paper: '#fff',
            },
            text: {
              primary: '#050c10', 
              secondary: '#3c3d45', 
            },
            primary: {
              main: '#425e9a',
            },
            secondary: {
              main: '#5fdbab', 
            },
            error: {
              main: '#ff4d4d', 
            },
          }
        : {
            background: {
              default: '#050c10',
              paper: '#081218',
            },
            text: {
              primary: '#ffffff',
              secondary: '#d5def0',
            },
            primary: {
              main: '#7089bf',
            },
            secondary: {
              main: '#5fdbab',
            },
            error: {
              main: '#ff4d4d',
            },
          }),
    },
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: '3.5rem',
        letterSpacing: '1px',
      },
    },
    shape: {
      borderRadius: 8,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,      
          disableFocusRipple: true, 
          textTransform: 'none'
          
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  };
}


export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Toggling between light/dark updates the `mode` state
  const colorMode = useMemo(
    () => ({
      toggleTheme: () =>
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  // Create a theme instance whenever `mode` changes
  const theme = useMemo(() => {
    let newTheme = createTheme(getDesignTokens(mode));
    // Optionally make typography responsive
    newTheme = responsiveFontSizes(newTheme);
    return newTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Normalize default browser styles */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
