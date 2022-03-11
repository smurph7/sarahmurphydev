import { extendTheme } from '@chakra-ui/react';

type BrandColors = {
  lightLime: string;
  freshLemon: string;
  teal: string;
  mint: string;
  navy: string;
};

const colors: BrandColors = {
  lightLime: '#abd699',
  freshLemon: '#ffe26a',
  teal: '#75c9b7',
  mint: '#c7ddcc',
  navy: '#16123f'
};

export const theme = extendTheme({ colors });
