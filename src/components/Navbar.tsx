import React, { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Box, AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
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

const Navbar: NextPage = () => {
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
          padding: "1rem 0",
        }}
      >
        <StyledLink href="/" passHref className={recursiveClass}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 500,
              cursor: "pointer",
              color: theme.palette.primary.main,
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
            padding: "0.1rem 1rem",
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            gap: "0.7rem",
          }}
        >
          <StyledLink href="/about" className={recursiveClass}>
            About
          </StyledLink>
          <StyledLink href="#" passHref className={recursiveClass}>
            Projects
          </StyledLink>
          <StyledLink href="#" passHref className={recursiveClass}>
            Resume
          </StyledLink>
          <StyledLink href="#" passHref className={recursiveClass}>
            Blog
          </StyledLink>
          <StyledLink href="#" passHref className={recursiveClass}>
            Art
          </StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
