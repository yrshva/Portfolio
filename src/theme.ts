'use client';

import { createTheme } from "@mui/material";
import { colors } from "./styles";

const theme = createTheme({
    palette: {
      primary: {
        main: colors.main.lighter,
      },
    },
    typography: {
      fontSize: 15,
      fontFamily: [
        "-apple -system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  });

  export default theme;

