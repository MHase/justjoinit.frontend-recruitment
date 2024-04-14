import { Components, Theme, formHelperTextClasses, outlinedInputClasses } from '@mui/material';

export const MuiChip: Components<Theme>['MuiChip'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    root: {
      height: 28,
    },
    label: {
      paddingRight: 8,
      paddingLeft: 8,
    },
    colorPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
    }),
  },
};
