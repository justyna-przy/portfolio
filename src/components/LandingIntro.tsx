import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const LandingIntro: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', p: { xs: 2, md: 4 } }}>
      <Typography variant="h1" gutterBottom>
        Software Engineer
      </Typography>
      <Typography variant="h6" color='#8991ff'>
        Studying Immersive Software Engineering
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: theme.spacing(1),
          mt: theme.spacing(2),
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <LuGithub size={30} />
        <AiOutlineLinkedin size={35} />
        <FaXTwitter size={30} color="pink" />
        <HiOutlineMail size={35} />
      </Box>
    </Box>
  );
};

export default LandingIntro;
