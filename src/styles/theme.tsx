'use client';

import { createTheme } from '@mui/material/styles';

import * as components from './overrides/components';
import { palette } from './overrides/palette';
import { typography } from './overrides/typography';

const theme = createTheme({
  typography,
  spacing: 10,
  palette,
  shape: {
    borderRadius: 2,
  },
  components,
});

export default theme;
