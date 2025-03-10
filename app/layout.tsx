import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';




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
      <body>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
          {/* </LocalizationProvider> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
