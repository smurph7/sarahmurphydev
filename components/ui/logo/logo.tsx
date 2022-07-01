import * as React from 'react';
import NextImage from 'next/image';
import { Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

export const Logo = ({ ...props }: { [x: string]: any }): JSX.Element => (
  <ScrollLink to="home" href="/" smooth={true}>
    <Button
      aria-label="Logo Home Button"
      variant="unstyled"
      _focus={{ outline: 'none', border: 'none' }}
      position="fixed"
      zIndex="sticky"
      width="150px"
      height="150px"
      {...props}
    >
      <NextImage
        src="/static/sm-logo-500px.png"
        alt="logo"
        width="250px"
        height="250px"
        quality={100}
        priority
      />
    </Button>
  </ScrollLink>
);
