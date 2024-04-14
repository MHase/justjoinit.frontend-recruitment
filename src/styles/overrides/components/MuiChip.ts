import { Components, Theme, formHelperTextClasses, outlinedInputClasses } from '@mui/material';

export const MuiChip: Components<Theme>['MuiChip'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    colorPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
    }),
  },
};
