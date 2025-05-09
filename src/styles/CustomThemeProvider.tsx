import React, { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import { Recursive, Outfit } from "next/font/google";
import { FontProvider } from "../styles/FontContext";

function getDesignTokens(mode: "light" | "dark") {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f0f0f0",
              paper: "#fff",
            },
            text: {
              primary: "#050c10",
              secondary: "#3c3d45",
            },
            primary: {
              main: "#8991ff",
              accent: "#8991ff",
            },
            secondary: {
              main: "#ffafde",
              pink: "#ffafde",
              blue: "#a8cfff",
              green: "#abffd0",
              yellow: "#ffefad",
            },
          }
        : {
            background: {
              default: "#1a1d1e",
              paper: "#081218",
            },
            text: {
              primary: "#ffffff",
              secondary: "#c3cde1",
            },
            primary: {
              main: '#8991ff',
            },
            secondary: {
              main: "#ffafde",
              pink: "#ffafde",
              blue: "#a8cfff",
              green: "#abffd0",
              yellow: "#ffefad",
            },
          }),
    },
    typography: {

      h1: {
        fontFamily: "var(--font-outfit), sans-serif",
        fontWeight: 500,
        fontSize: "5rem",
        letterSpacing: "0.1rem",
      },
      h3: {
        fontFamily: "var(--font-outfit), sans-serif",
        fontWeight: 400,
        fontSize: "1.7rem",
      },
      h4: {
        fontFamily: "var(--font-recursive), sans-serif",
        fontWeight: 400,
        fontSize: "1.7rem",
      },
      h5: {
        fontFamily: "var(--font-outfit), sans-serif",
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "1.4rem",
      },
      h6: {
        fontFamily: "var(--font-outfit), sans-serif",
        fontWeight: 200,
        fontSize: "1rem",
        fontStyle: "italic",
      },
      body1: {
        fontWeight: 300,
        fontSize: "1.2rem",
        fontFamily: "var(--font-outfit), sans-serif",
      },
      body2: {
        fontWeight: 300,
        fontSize: "0.8rem",
        fontFamily: "var(--font-recursive), sans-serif",
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
          textTransform: "none",
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
            backgroundImage: "none",
            boxShadow: "none",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h4: {
            fontFamily: "var(--font-recursive), sans-serif",
            fontWeight: 400,
            fontSize: "1.5rem",
          },
        },
      },
    },
  };
}

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-recursive",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  // Toggling between light/dark updates the `mode` state
  const colorMode = useMemo(
    () => ({
      toggleTheme: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
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
      <FontProvider
        recursiveClass={recursive.className}
        outfitClass={outfit.className}
      >
        <ThemeProvider theme={theme}>
          <div className={`${recursive.className} ${outfit.className}`}>
            <CssBaseline />
            {children}
          </div>
        </ThemeProvider>
      </FontProvider>
    </ThemeContext.Provider>
  );
}
