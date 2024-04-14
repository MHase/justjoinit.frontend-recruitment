import { Components, Theme, outlinedInputClasses } from '@mui/material';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.palette.primary.main,
      },

      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        borderWidth: 1,
      },

      [`&.Mui-error .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.palette.grey[400],
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: theme.palette.grey[400],
      transition: theme.transitions.create('border-color'),
    }),
    input: {
      padding: '10px 14px',
    },
  },
};
