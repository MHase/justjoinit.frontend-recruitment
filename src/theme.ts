"use client";
import { createTheme } from "@mui/material/styles";

import localFont from "next/font/local";

export const imbVga = localFont({
  src: "./assets/fonts/Web437_IBM_VGA_9x16.woff",
});

const theme = createTheme({
  typography: {
    fontFamily: imbVga.style.fontFamily,
  },
});

export default theme;
