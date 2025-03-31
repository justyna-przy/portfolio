import React, { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { ThemeContext } from "../styles/ThemeContext";
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";

// AppBar with transparent background and absolute positioning
const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "absolute",
  zIndex: 10,
}));

// Toolbar set to relative, with space-between alignment so the logo and toggle are at the edges.
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  position: "relative", // Important for absolutely positioning the navlinks container inside it
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "transparent",
  boxShadow: "none",
  height: "5rem",
}));

// Centered navlinks container (absolute positioning centers it in the toolbar)
const NavLinksContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Optional: keep fixed width or adjust as needed
  width: "20rem",
  backgroundColor: "rgba(240, 240, 240, 0.05)",
  backdropFilter: "blur(8px)",
  borderRadius: "1rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "0.2rem", 
  border: "1px solid rgba(240, 240, 240, 0.115)",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  margin: "0.5rem",
  color: theme.palette.text.primary,
  fontSize: "1.1rem",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "#8991ff",
  },
  "&:active": {
    color: theme.palette.text.secondary,
  },
  "&:-webkit-any-link": {
    textDecoration: "none",
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "500",
  cursor: "pointer",
  color: theme.palette.text.secondary,
}));

const Navbar: NextPage = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <TransparentAppBar>
      <StyledToolbar>
        {/* Logo on the far left */}
        <StyledLink href="#" passHref>
          <Logo>justyna-przy</Logo>
        </StyledLink>

        {/* Nav Links container is absolutely centered */}
        <NavLinksContainer>
          <StyledLink href="#" passHref>
            About
          </StyledLink>
          <StyledLink href="#" passHref>
            Projects
          </StyledLink>
          <StyledLink href="#" passHref>
            Resume
          </StyledLink>
          <StyledLink href="#" passHref>
            Blog
          </StyledLink>
          <StyledLink href="#" passHref>
            Art
          </StyledLink>
        </NavLinksContainer>

        {/* <IconButton
          onClick={toggleTheme}
          sx={(theme) => ({
            color: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.text.secondary,
            },
          })}
        >
          {theme.palette.mode === "light" ? (
            <DarkMode fontSize="large" />
          ) : (
            <LightMode fontSize="large" />
          )}
        </IconButton> */}
      </StyledToolbar>
    </TransparentAppBar>
  );
};

export default Navbar;
