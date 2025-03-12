import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { Paper } from "@mui/material";
import { Roboto, } from 'next/font/google';


const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
export const metadata: Metadata = {
  title: "CampWiz nxt",
  description: "A powerful tool for organizing campaigns on Wikimedia projects",
  authors: [
    {
      name: "Nokib Sarkar",
      url: "https://github.com/nokibsarkar",
    },
    {
      name: "Tiven Gonsalves",
    },
    {
      name: "Mst. Rukaiya Islam Tanni",
      url: "https://github.com/Tonni28",
    }
  ]
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={roboto.className}>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProvider theme={theme}>
            <Paper elevation={0} sx={{ height: '100vh', overflow: 'auto' }}>
              {children}
            </Paper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
