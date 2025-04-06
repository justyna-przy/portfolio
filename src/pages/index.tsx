import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CloudAnimation from '../components/CloudAnimation';
import { Canvas } from '@react-three/fiber';
import LandingIntro from '../components/LandingIntro';
import LongTailedTitModel from '../components/LongTailedTitModel';

const Home: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden', // hides any overflow from the canvas
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Canvas
            style={{ width: '100%', height: '100%' }}
            camera={{ position: [0, 0, 5], fov: 45 }}
          >
            <LongTailedTitModel />
          </Canvas>
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            height: '100%',
            p: 4,
            justifyContent: 'flex-end',
            alignItems: 'center',
            pointerEvents: 'all',
          }}
        >
          <LandingIntro />
        </Box>
      </Box>
    </>
  );
};

export default Home;
