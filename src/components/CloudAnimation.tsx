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
    : "radial-gradient(49% 81% at 45% 47%, #A6A59B26 0%, #073AFF00 100%),radial-gradient(142% 91% at -6% 74%, #EEEEEE4F 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #1D1F2B3D 0%, #1D1F2BC9 100%);",
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
      
      const highlightColor = theme.palette.mode === "light" ? 0xffdaf6 : 0x747490;
      const midtoneColor = theme.palette.mode === "light" ? 0x7987a8 : 0x2d2d48;
      const lowlightColor = theme.palette.mode === "light" ? 0x544c73 : 0x1e11;
      const baseColor = theme.palette.mode === "light" ? 0xffffff : 0x10105;

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
  }, [theme.palette.mode]); // Re-run effect when theme mode changes


  return (
    <Box position="relative" width="100%" height="100vh">
      <div ref={vantaRef} style={{ width: "100%", height: "100%" }} />
      
      {/* Overlay with Gradient */}
      <Overlay />
    </Box>
  );
};

export default CloudAnimation;
