import * as React from 'react';
import { Flex, Link, Button, Icon } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';

export const Footer = (): JSX.Element => (
  <Flex justify="right" p={4}>
    <Link href="https://github.com/smurph7/sarahmurphydev" isExternal>
      <Button
        variant="link"
        color="navy"
        rightIcon={<Icon as={IoLogoGithub} boxSize={9} />}
        alignItems="center"
      >
        View source on Github
      </Button>
    </Link>
  </Flex>
);
