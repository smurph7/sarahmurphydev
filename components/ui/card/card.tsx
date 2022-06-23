import * as React from 'react';
import { Flex } from '@chakra-ui/react';

export const Card = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}): JSX.Element => (
  <Flex
    bg="rgba(255,255,255,0.3)"
    borderRadius="2xl"
    boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
    p={4}
    {...props}
  >
    {children}
  </Flex>
);
