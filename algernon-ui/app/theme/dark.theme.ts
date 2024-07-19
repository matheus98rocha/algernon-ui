"use client";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d6b13b",
      contrastText: "#fff",
    },
  },
});

export default darkTheme;
