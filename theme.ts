
'use client';
import { createTheme } from '@mui/material/styles';
// const lora = Lora({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lora',
// });

const theme = createTheme({
  typography: {
    fontFamily: `var(--font-roboto)`,
  },
  palette: {
    error: {
      main: '#9b0606',
    },
    success: {
      main: '#339966',
    },
    primary: {
      main: '#006699'
    }
  },
  cssVariables: true,
});

export default theme;
