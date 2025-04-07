import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import LandingIntro from "../components/LandingIntro";
import LongTailedTitModel from "../components/LongTailedTitModel";

const Home: React.FC = () => {
  const [canRender3D, setCanRender3D] = useState(true);

  useEffect(() => {
    const start = performance.now();
    for (let i = 0; i < 5000000; i++) {} // rough CPU check
    const duration = performance.now() - start;
    if (duration > 250) setCanRender3D(false); // adjust threshold as needed
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        {canRender3D ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <LongTailedTitModel />
          </Canvas>
        ) : (
          <img
            src="/fallback-bird.png"
            alt="Bird"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          height: "100%",
          p: 4,
          justifyContent: "flex-end",
          alignItems: "center",
          pointerEvents: "all",
        }}
      >
        <LandingIntro />
      </Box>
    </Box>
  );
};

export default Home;
