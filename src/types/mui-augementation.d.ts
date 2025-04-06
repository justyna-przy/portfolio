import "@mui/material/styles";

// Augment the existing MUI module
declare module "@mui/material/styles" {
  // Extend the existing interfaces
  interface PaletteColor {
    accent?: string;
    pink?: string;
    blue?: string;
    green?: string;
    yellow?: string;
  }
  interface SimplePaletteColorOptions {
    accent?: string;
    pink?: string;
    blue?: string;
    green?: string;
    yellow?: string;
  }
}

export {};
