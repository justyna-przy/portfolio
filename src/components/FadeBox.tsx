import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useImperativeHandle,
} from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import { FontContext } from "../styles/FontContext";

export interface FadeBoxProps extends BoxProps {
  children: React.ReactNode;
  title?: string;
}

const FadeBox = React.forwardRef<HTMLDivElement, FadeBoxProps>(
  ({ children, title, sx, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    const localRef = useRef<HTMLDivElement>(null);
    const { recursiveClass } = useContext(FontContext);

    // Make the localRef’s DOM element accessible to the parent ref
    useImperativeHandle(ref, () => localRef.current!, [localRef]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      if (localRef.current) {
        observer.observe(localRef.current);
      }

      return () => {
        if (localRef.current) observer.unobserve(localRef.current);
      };
    }, []);

    return (
      <Box
        ref={localRef}
        sx={{
          position: "relative",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          background: "rgba(24, 18, 28, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: 2,
          p: 2,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
          ...sx,
        }}
        {...rest}
      >
        {title && (
          <Typography
            className={recursiveClass}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontSize: "0.8rem",
              fontWeight: "300",
              opacity: 0.8,
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    );
  }
);

FadeBox.displayName = "FadeBox";
export default FadeBox;
