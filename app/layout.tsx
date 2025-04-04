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
  applicationName: "CampWiz",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Nokib Sarkar",
      url: "https://github.com/nokibsarkar",
    },
    {
      name: "Mst. Rukaiya Islam Tonni",
      url: "https://github.com/Tonni28",
    },
    {
      name: "Tiven Gonsalves",

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
      <AppRouterCacheProvider
        options={{ key: 'css' }}
      >
        <ThemeProvider theme={theme}>
          <Paper component='body' className={`h-full w-full p-0 m-0 overflow-auto ${roboto.className}`} sx={{ m: 0, p: 0, height: '100%', width: '100%', position: 'absolute' }} elevation={0}>
            {children}
          </Paper>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
