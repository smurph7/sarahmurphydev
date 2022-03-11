import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from '../theme';

// export type BrandColors = {
//   lightLime: string;
//   freshLemon: string;
//   teal: string;
//   mint: string;
//   navy: string;
// };

// const colors: BrandColors = {
//   lightLime: '#abd699',
//   freshLemon: '#ffe26a',
//   teal: '#75c9b7',
//   mint: '#c7ddcc',
//   navy: '#16123f'
// };


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
