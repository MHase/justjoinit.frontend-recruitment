import { Theme, alpha } from '@mui/material';

export const focusStyles = (theme: Theme) => ({
  boxShadow: `0px 0px 0px 4px ${theme.palette.primary.light}`,
});

export const dialogShadow = (theme: Theme) => ({
  boxShadow: `0px 4px 10px 2px ${alpha(theme.palette.common.black, 0.1)}`,
});
