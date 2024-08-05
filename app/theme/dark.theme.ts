"use client";
import { createTheme, Shadows } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d6b13b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b39230",
    },
    background: {
      paper: "#faf0f0",
      default: "#F4E772",
    },
  },
  shadows: [
    "none",
    "3px 3px 10px 0 rgba(0, 0, 0, 0.15)",
    "3px 3px 10px 0 rgba(0, 0, 0, 0.3)",
    "0px 6px 8px 0px rgba(0, 0, 0, 0.25)",
    "0px 15px 52px 15px rgba(50, 59, 82, 0.15)",
    ...Array(20).fill("none"),
  ] as Shadows,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#d6b13b",
            },
          },
        },
      },
    },
  },
});

export default darkTheme;
