import { ChevronDown } from '@/components/_icons/ChevronDown';
import { Components, Theme, autocompleteClasses, outlinedInputClasses } from '@mui/material';

import { dialogShadow } from '../common';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
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

    listbox: ({ theme }) => ({
      padding: 0,

      [`.${autocompleteClasses.option}`]: {
        'padding': '8px 12px',
        'color': theme.palette.common.black,

        '&[aria-selected=true]': {
          'backgroundColor': 'transparent',
          'color': theme.palette.primary.main,

          '&.Mui-focused': {
            backgroundColor: theme.palette.primary.light,
          },
        },

        '&.Mui-focused, &.Mui-focusedVisible': {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }),
  },
};
