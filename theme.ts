
'use client';
import { createTheme } from '@mui/material/styles';
import { Lora, } from 'next/font/google';
const lora = Lora({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});
// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
// });
const theme = createTheme({
  typography: {
    fontFamily: `var(${lora.variable})`,
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
