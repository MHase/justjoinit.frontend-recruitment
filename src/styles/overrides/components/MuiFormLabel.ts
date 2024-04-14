import { Components, Theme } from '@mui/material';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.subtitle1,
    }),
  },
};
