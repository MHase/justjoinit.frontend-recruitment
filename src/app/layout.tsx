import '@/styles/global.css';
import theme from '@/styles/theme';
import { CssBaseline, Stack } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruitment | Just Join IT',
  description: 'Senior Frontend recruitment task',
  metadataBase: new URL('https://jjit.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider options={{ key: 'jjit' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Stack
              alignItems='center'
              justifyContent='center'
              minHeight='100vh'
              p={[2.4, null, 3.2]}
            >
              {children}
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
