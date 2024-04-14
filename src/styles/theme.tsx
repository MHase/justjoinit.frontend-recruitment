'use client';

import localFont from 'next/font/local';

import { ChevronDown } from '@/components/_icons/ChevronDown';
import {
  autocompleteClasses,
  formHelperTextClasses,
  inputBaseClasses,
  outlinedInputClasses,
  textFieldClasses,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { dialogShadow, focusStyles } from './overrides/common';
import { palette } from './overrides/palette';

export const imbVga = localFont({
  src: '../assets/fonts/Web437_IBM_VGA_9x16.woff',
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headline: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headline: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headline: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: imbVga.style.fontFamily,
    body1: {
      fontSize: 14,
      lineHeight: '20px',
    },
    body2: {
      fontSize: 12,
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: 12,
      lineHeight: '20px',
    },
    subtitle2: {
      fontSize: 10,
      lineHeight: '16px',
    },
    headline: {
      fontSize: 40,
      lineHeight: 'auto',
    },
  },
  spacing: 10,
  palette,
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
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
            'backgroundColor': theme.palette.grey[400],
            ':hover': {
              backgroundColor: theme.palette.grey[300],
            },
          }),
        },
      ],
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-focused': {
            ...focusStyles(theme),
          },

          [`+ .${formHelperTextClasses.root}`]: {
            margin: 0,
            marginTop: 2,
          },
        }),
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },

          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 1,
          },
        }),
        input: {
          padding: '10px 14px',
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.disabledBg,
        }),
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <ChevronDown />,
      },
      styleOverrides: {
        root: {
          [`.${outlinedInputClasses.root} .${autocompleteClasses.endAdornment}`]: {
            right: 10,
          },
        },
        popper: ({ theme }) => ({
          ...dialogShadow(theme),
        }),
        endAdornment: ({ theme }) => ({
          button: {
            color: theme.palette.grey[100],
            transition: theme.transitions.create('transform'),
          },
        }),
      },
    },
  },
});

export default theme;
