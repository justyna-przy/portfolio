import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";

const WIP: React.FC = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: "0 auto",
            backgroundColor: "rgba(14, 4, 23, 0.8)",
        }}
    >
      <Image
        src="/images/wip.png"
        width={500}
        height={500}
        alt="Image of bird with a hard hat"
        />
    <Typography
        variant="h4">
        This page is a work in progress. Please check back later.
    </Typography>
    </Box>
  );
};

export default WIP;