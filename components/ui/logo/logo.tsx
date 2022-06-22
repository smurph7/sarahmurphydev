import * as React from 'react';
import NextImage from 'next/image';
import { Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

export const Logo = (): JSX.Element => (
  <ScrollLink to="home" smooth={true} spy={true}>
    <Button
      variant="unstyled"
      _focus={{ outline: 'none', border: 'none' }}
      position="fixed"
      zIndex="sticky"
      width="100px"
      height="100px"
    >
      <NextImage
        src="/static/sm-logo.png"
        alt="logo"
        width="100px"
        height="100px"
      />
    </Button>
  </ScrollLink>
);
