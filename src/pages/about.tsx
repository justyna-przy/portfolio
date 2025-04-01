import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundColor: '#232332',
        }}
      >
        
      </Box>
    </>
  );
};

export default Home;
