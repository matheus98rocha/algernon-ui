"use client";
import { createTheme } from "@mui/material";

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
