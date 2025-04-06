import React, { useContext } from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";
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
        textAlign: "right",
        gap: 2,
        paddingRight: "4rem",
      }}
    >
      <Typography variant="h4">Hi, my name is Justyna and I&apos;m a </Typography>
      <Typography variant="h1">Software Engineer</Typography>
      <Typography
        variant="h4"
        className={recursiveClass}
        color={theme.palette.text.secondary}
      >
        Studying Immersive Software Engineering, Ex-Stripe
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
        <Link
          href="https://github.com/justyna-przy"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <LuGithub size={45} color={theme.palette.secondary.green} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/justyna-przy/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <AiOutlineLinkedin size={50} color={theme.palette.secondary.blue} />
        </Link>
        <Link
          href="https://x.com/justyna_przy"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <FaXTwitter size={45} color={theme.palette.secondary.pink} />
        </Link>
        <Link href="mailto:justyna.przyborska22@gmail.com" underline="none">
          <HiOutlineMail size={50} color={theme.palette.secondary.yellow} />
        </Link>
      </Box>
    </Box>
  );
};

export default LandingIntro;
