import localFont from 'next/font/local';

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

const imbVga = localFont({
  src: '../../assets/fonts/Web437_IBM_VGA_9x16.woff',
});

export const typography = {
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
};
