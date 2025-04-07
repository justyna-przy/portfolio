import React, { useContext } from "react";
import Link from "next/link";
import { Box, AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { FontContext } from "../styles/FontContext";

const StyledLink = styled(Link)(({ theme }) => ({
  margin: "0.2rem",
  color: theme.palette.text.primary,
  fontSize: "1.1rem",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 300,
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&:active": {
    color: theme.palette.text.secondary,
  },
  "&:-webkit-any-link": {
    textDecoration: "none",
  },
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { recursiveClass } = useContext(FontContext);

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "2rem",
          background: `linear-gradient(to bottom, rgba(31, 28, 28, 0.841), rgba(255, 255, 255, 0))`,
        }}
      >
        <StyledLink href="/" passHref className={recursiveClass}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 400,
              cursor: "pointer",
              marginLeft: "1rem",
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            justyna-przy
          </Typography>
        </StyledLink>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.4rem 4rem",
            border: `1px solid #cdc8c833`,
            gap: "0.7rem",
            backgroundColor: "#1e1b1f",
            borderRadius: "0.5rem",
            backdropFilter: "blur(10px)",
          }}
        >
          <StyledLink href="/about" className={recursiveClass}>
            About
          </StyledLink>
          <StyledLink href="/projects" passHref className={recursiveClass}>
            Projects
          </StyledLink>
          <StyledLink
            href="/JustynaCV0425.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={recursiveClass}
          >
            Resume
          </StyledLink>
          <StyledLink href="/blog" passHref className={recursiveClass}>
            Blog
          </StyledLink>
          <StyledLink href="/art" passHref className={recursiveClass}>
            Art
          </StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
