import { Components, Theme } from '@mui/material';

import { focusStyles } from '../common';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
    disableRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      'paddingLeft': 24,
      'paddingRight': 24,
      'height': 40,
      'textTransform': 'none',

      ':focus': {
        ...focusStyles(theme),
      },
    }),
  },
  variants: [
    {
      props: { variant: 'soft' },
      style: ({ theme }) => ({
        'color': theme.palette.text.primary,
        'backgroundColor': theme.palette.grey[400],

        ':hover': {
          backgroundColor: theme.palette.grey[300],
        },
      }),
    },
  ],
};
