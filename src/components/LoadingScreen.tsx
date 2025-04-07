import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Cześć",
  "Hallo",
  "नमस्ते",
  "こんにちは",
  "안녕하세요",
  "سلام",
  "Hej",
  "Olá",
  "Γεια σου",
];

const LoadingScreen = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "inherit",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          src="/images/robin_animation.gif"
          alt="Bird"
          width={50}
          height={50}
          priority // ensures it loads immediately
        />
        <Typography variant="h4" sx={{ transition: "opacity 0.5s" }}>
          {greetings[index]}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
