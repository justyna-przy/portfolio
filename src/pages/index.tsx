// src/pages/index.tsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CloudAnimation from '../components/CloudAnimation';
import ModelCanvas from '../components/ModelCanvas';
import LandingIntro from '../components/LandingIntro';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
        }}
      >
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
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ModelCanvas />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4,
            }}
          >
            <LandingIntro />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
