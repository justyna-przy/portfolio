import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useTheme, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  backgroundImage: theme.palette.mode === "light"
    ? "radial-gradient(70% 53% at 36% 76%, #fffef066 0%, #073AFF00 100%),linear-gradient(50deg, #C8DCECB0 0%, #5e4971bc 100%);"
    : "radial-gradient(49% 81% at 45% 47%, #a6a59b11 0%, #073AFF00 100%),radial-gradient(142% 91% at -6% 74%, #b3a9e139 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #0d0e127d 0%, #1f1e28c7 100%);",
}));

const CloudAnimation: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Destroy any existing effect before creating a new one
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      
      const highlightColor = theme.palette.mode === "light" ? "#ffdaf6" : "#292442";
      const midtoneColor = theme.palette.mode === "light" ? "#7987a8" : "#161625";
      const lowlightColor = theme.palette.mode === "light" ? "#544c73" : "#4111ee11";
      const baseColor = theme.palette.mode === "light" ? "#ffffff" : "#101050";

      const newEffect = FOG({
        THREE,
        el: vantaRef.current!,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor,
        midtoneColor,
        lowlightColor,
        baseColor,
        blurFactor: 0.55,
        speed: 2.0,
        zoom: 1,
      });
      setVantaEffect(newEffect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [theme.palette.mode]); 


  return (
    <Box position="relative" width="100%" height="100vh">
      <div ref={vantaRef} style={{ width: "100%", height: "100%" }} />
      <Overlay />
    </Box>
  );
};

export default CloudAnimation;
