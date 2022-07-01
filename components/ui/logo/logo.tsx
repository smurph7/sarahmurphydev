import * as React from 'react';
import NextImage from 'next/image';
import { Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

export const Logo = ({ ...props }: { [x: string]: any }): JSX.Element => (
  <ScrollLink to="home" href="/" smooth={true} spy={true}>
    <Button
      aria-label="Logo Home Button"
      variant="unstyled"
      _focus={{ outline: 'none', border: 'none' }}
      position="fixed"
      zIndex="sticky"
      width="100px"
      height="100px"
      {...props}
    >
      <NextImage
        src="/static/sm-logo-250px.png"
        alt="logo"
        width="100px"
        height="100px"
      />
    </Button>
  </ScrollLink>
);
