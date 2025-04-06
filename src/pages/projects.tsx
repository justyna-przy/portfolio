import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import CloudAnimation from "../components/CloudAnimation";

const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <CloudAnimation />
        </Box>
    </>
  );
};

export default Projects;