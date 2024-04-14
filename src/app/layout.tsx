import theme from '@/styles/theme';
import { Box, CssBaseline, Stack } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Just Join IT',
  description: 'Senior Frontend recruitment task',
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
            <Stack alignItems='center' justifyContent='center' minHeight='100vh'>
              {children}
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
