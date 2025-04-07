import React, { useContext } from "react";
import Link from "next/link";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FontContext } from "../styles/FontContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../styles/ThemeContext"; // Light/dark toggle context

const StyledLink = styled(Link)(({ theme }) => ({
  margin: "0.2rem",
  color: theme.palette.text.primary,
  fontSize: "0.9rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
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
  const { toggleTheme } = useContext(ThemeContext);
  const isLightMode = theme.palette.mode === "light";

  const navLinks = (
    <>
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
    </>
  );

  return (
    <AppBar
      sx={{
        position: { xs: "relative", md: "absolute" },
        boxShadow: "none",
        zIndex: 10,
        backgroundColor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: {
            xs: "1rem 2rem",
            md: "1.5rem 3rem",
            lg: "2rem 4rem",
          },
          background: `linear-gradient(to bottom, rgba(31,28,28,0.84), rgba(255,255,255,0))`,
          backgroundColor: {xs:theme.palette.background.default, md:"transparent"},

        }}
      >
        <StyledLink href="/" passHref className={recursiveClass}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 400,
              cursor: "pointer",
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            justyna-przy
          </Typography>
        </StyledLink>

        <IconButton onClick={toggleTheme} color="inherit">
          {isLightMode ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>

      <Toolbar
        disableGutters
        sx={{
          position: { xs: "relative", md: "absolute" },
          left: { xs: "auto", md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },
          padding: { xs: 0, md: "1.5rem", lg: "2rem" }, 
          margin: "0 auto",
          justifyContent: { xs: "center", md: "initial" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            padding: {xs:"0.2rem 1rem", md:"0.4rem 2rem"},
            width: { xs: "100%", md: "auto" },
            border: `1px solid #cdc8c833`,
            backgroundColor: "#1e1b1f",
            borderRadius: {xs:"none", md:"0.5rem"},
            backdropFilter: "blur(10px)",
            justifyContent: "center",
          }}
        >
          {navLinks}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
