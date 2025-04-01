import React, { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FontContext } from "../styles/FontContext";

const LandingIntro: React.FC = () => {
  const theme = useTheme();
  const { recursiveClass } = useContext(FontContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "right", // Keep right text alignment if you want
        gap: 2,
        paddingRight: "4rem",
      }}
    >
      <Typography variant="h1">Software Engineer</Typography>
      <Typography
        variant="h4"
        className={recursiveClass}
        color={theme.palette.text.secondary}
      >
        Studying Immersive Software Engineering
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: theme.spacing(1),
          mt: theme.spacing(2),
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <LuGithub size={45} color={theme.palette.secondary.green}/>
        <AiOutlineLinkedin size={50} color={theme.palette.secondary.blue}/>
        <FaXTwitter size={45} color={theme.palette.secondary.pink}/>
        <HiOutlineMail size={50} color={theme.palette.secondary.yellow}/>
      </Box>
    </Box>
  );
};

export default LandingIntro;
