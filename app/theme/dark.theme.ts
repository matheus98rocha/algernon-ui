"use client";
import { BorderColor } from "@mui/icons-material";
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
      default: "#faf0f0",
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
