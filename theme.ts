
'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    dalgona: Palette['primary'];
  }
  interface PaletteOptions {
    dalgona?: PaletteOptions['primary'];
  }
}
// Update the Button's color options to include a salmon option
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    dalgona: true;
  }
}

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
  colorSchemes: {
    dark: true,
    light: true,
  },
  // palette: {
  //   mode: 'light',
  //   //   error: {
  //   //     main: '#9b0606',
  //   //   },
  //   //   success: {
  //   //     main: '#339966',
  //   //   },
  //   //   primary: {
  //   //     main: '#006699'
  //   //   },
  //   //   dalgona: {
  //   //     main: '#d9aa59',
  //   //   }
  // },
  // cssVariables: true,
});

export default theme;
