import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import CustomThemeProvider from "../styles/CustomThemeProvider";
import Navbar from "../components/Navbar";
import CloudAnimation from "@/components/CloudAnimation";
import LoadingScreen from "@/components/LoadingScreen"; // create this
import { Box } from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CustomThemeProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
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
            }}
          >
            <Navbar />
          </Box>

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Component {...pageProps} />
          </Box>
        </>
      )}
    </CustomThemeProvider>
  );
}
