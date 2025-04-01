import React, { createContext, ReactNode } from "react";

interface FontContextProps {
  recursiveClass: string;
  outfitClass: string;
}

export const FontContext = createContext<FontContextProps>({
  recursiveClass: "",
  outfitClass: "",
});

interface FontProviderProps {
  children: ReactNode;
  recursiveClass: string;
  outfitClass: string;
}

export const FontProvider = ({
  children,
  recursiveClass,
  outfitClass,
}: FontProviderProps) => {
  return (
    <FontContext.Provider value={{ recursiveClass, outfitClass }}>
      {children}
    </FontContext.Provider>
  );
};
