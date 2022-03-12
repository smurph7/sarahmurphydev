import {
  Box,
  Flex,
  Link,
  ChakraProps,
  OmitCommonProps
} from '@chakra-ui/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Sidebar = JSX.IntrinsicAttributes &
  OmitCommonProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    keyof ChakraProps
  > &
  ChakraProps & { as?: 'div' | undefined };

type NavItem = { [x: string]: any; children?: any };

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
        px={4}
        py={5}
        direction="column"
        as="nav"
        fontSize="md"
        color="navy"
        aria-label="Main Navigation"
      >
        <NavItem>About Me</NavItem>
        <NavItem>Experience</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Flex>
    </Flex>
  </Box>
);

const NavItem = ({ children, ...rest }: NavItem) => {
  return (
    <Flex width="100%" align="center" justify="center">
      <Link width="100%" _hover={{ textDecoration: 'none' }}>
        <Flex
          py={3}
          width="100%"
          align="center"
          justify="center"
          _hover={{
            bg: 'freshLemon',
            color: 'navy',
            borderRadius: '4px'
          }}
          role="group"
          fontWeight="semibold"
          fontSize="lg"
          transition=".1s ease"
          {...rest}
        >
          {children}
        </Flex>
      </Link>
    </Flex>
  );
};
