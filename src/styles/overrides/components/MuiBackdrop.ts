import { Components, Theme } from '@mui/material';

export const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.disabledBg,
    }),
  },
};
