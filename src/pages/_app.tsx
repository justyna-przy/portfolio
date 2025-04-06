// pages/_app.tsx
import type { AppProps } from "next/app";
import CustomThemeProvider from "../styles/CustomThemeProvider";
import Navbar from "../components/Navbar";
import CloudAnimation from "../components/CloudAnimation";
import { Box } from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <CloudAnimation />
      </Box>

      <Box
        sx={{
          position: "fixed",
          zIndex: 10,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Navbar />
      </Box>

      {/* The actual page content (all pages) */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Component {...pageProps} />
      </Box>
    </CustomThemeProvider>
  );
}
