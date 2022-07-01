import * as React from 'react';
import { Flex, Button, ListItem, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

type Variant = {
  y: number;
  opacity: number;
  pointerEvents: string;
  transition: { y: { stiffness: number } };
};

type NavItem = {
  linkId: string;
  variants: {
    open: Variant;
    closed: Variant;
  };
  [x: string]: any;
  children: React.ReactNode;
};

const MotionListItem = motion(ListItem);

export const NavItem = ({
  linkId,
  variants,
  children,
  ...rest
}: NavItem): JSX.Element => {
  const variant = useBreakpointValue({ base: variants, md: {} });

  const activeLinkStyle = {
    bg: 'freshLemon',
    color: 'navy',
    borderRadius: '4px'
  };

  const [linkStyle, setLinkStyle] = React.useState({});

  const handleSetActive = () => {
    setLinkStyle(activeLinkStyle);
  };

  const handleSetInactive = () => {
    setLinkStyle({});
  };

  return (
    <MotionListItem
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', bounce: 0.5 }}
    >
      <Flex width="100%" align="center" justify="center">
        <Button
          variant="unstyled"
          _focus={{ outline: 'none', border: 'none' }}
          width={['70%', '100%']}
          style={{ userSelect: 'none' }}
          _hover={{ textDecoration: 'none' }}
          _active={{
            bg: 'yellow',
            color: 'navy',
            borderRadius: '4px'
          }}
        >
          <ScrollLink
            to={linkId}
            href={`#${linkId}`}
            smooth={true}
            spy={true}
            offset={-40}
            onSetActive={handleSetActive}
            onSetInactive={handleSetInactive}
          >
            <Flex
              py={2}
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
              fontSize="xl"
              transition=".1s ease"
              {...linkStyle}
              {...rest}
            >
              {children}
            </Flex>
          </ScrollLink>
        </Button>
      </Flex>
    </MotionListItem>
  );
};
