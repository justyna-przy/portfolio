import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { PiBird } from "react-icons/pi"; // About Me
import { LuBriefcaseBusiness } from "react-icons/lu"; // Experience
import { IoSchoolOutline } from "react-icons/io5"; // Education
import { FaCode } from "react-icons/fa6"; // Skills
import { LuTrophy } from "react-icons/lu"; // Achievements

interface AboutSidebarProps {
  activeSection: string;
  onScrollTo: (sectionId: string) => void;
}

const AboutSidebar: React.FC<AboutSidebarProps> = ({
  activeSection,
  onScrollTo,
}) => {
  const drawerWidth = 240;

  // Add an "id" property to tie each link to a specific section.
  const links = [
    { text: "About Me", id: "about", icon: <PiBird /> },
    { text: "Experience", id: "experience", icon: <LuBriefcaseBusiness /> },
    { text: "Education", id: "education", icon: <IoSchoolOutline /> },
    { text: "Skills", id: "skills", icon: <FaCode /> },
    { text: "Achievements", id: "achievements", icon: <LuTrophy /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <List>
          {links.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton
                onClick={() => onScrollTo(link.id)}
                sx={{
                  cursor: "pointer", // Ensure the pointer cursor is used
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeSection === link.id ? "primary.main" : "inherit",
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    sx: {
                      color:
                        activeSection === link.id ? "primary.main" : "inherit",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AboutSidebar;
