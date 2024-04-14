import { Components, Theme, formHelperTextClasses } from '@mui/material';

import { focusStyles } from '../common';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
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
};
