import {
  Box,
  Flex,
  List,
  ChakraProps,
  OmitCommonProps
} from '@chakra-ui/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavItem } from '../navItem';

type Sidebar = JSX.IntrinsicAttributes &
  OmitCommonProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    keyof ChakraProps
  > &
  ChakraProps & { as?: 'div' | undefined };

export const Sidebar = ({ ...props }: Sidebar) => (
  <Box
    as="nav"
    pos="fixed"
    top={0}
    left={0}
    zIndex="sticky"
    pb={10}
    overflowX="hidden"
    overflowY="auto"
    borderRightWidth="1px"
    width={60}
    {...props}
  >
    <Flex minHeight="100vh" align="center" justify="center" width="100%">
      <Flex
        width="100%"
        px={6}
        direction="column"
        as="nav"
        fontSize="md"
        color="navy"
        aria-label="Main Navigation"
      >
        <List>
          <NavItem>About Me</NavItem>
          <NavItem>Experience</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
        </List>
      </Flex>
    </Flex>
  </Box>
);
