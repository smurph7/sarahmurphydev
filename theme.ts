import { extendTheme } from '@chakra-ui/react';

type BrandColors = {
  lightLime: string;
  freshLemon: string;
  brandTeal: string;
  mint: string;
  navy: string;
};

export const colors: BrandColors = {
  lightLime: '#abd699',
  freshLemon: '#ffe26a',
  brandTeal: '#75c9b7',
  mint: '#c7ddcc',
  navy: '#16123f'
};

export const theme = extendTheme({
  colors,
  components: {
    Code: {
      variants: {
        simple: {
          color: 'gray.500',
          boxShadow: 0,
          fontSize: 'xs',
          p: 0
        }
      }
    }
  }
});
