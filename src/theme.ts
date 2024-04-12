'use client';

import localFont from 'next/font/local';

import { createTheme } from '@mui/material/styles';

export const imbVga = localFont({
  src: './assets/fonts/Web437_IBM_VGA_9x16.woff',
});

const theme = createTheme({
  typography: {
    fontFamily: imbVga.style.fontFamily,
  },
});

export default theme;
