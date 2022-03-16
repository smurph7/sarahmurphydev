import { Flex, Link, ListItem, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

type NavItem = { linkId: string; [x: string]: any; children: any };

const MotionListItem = motion(ListItem);

const variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const NavItem = ({ linkId, children, ...rest }: NavItem) => {
  const variant = useBreakpointValue({ base: variants, md: {} });

  return (
    <MotionListItem
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', bounce: 0.7 }}
    >
      <Flex width="100%" align="center" justify="center">
        <Link
          width={['70%', '100%']}
          _hover={{ textDecoration: 'none' }}
          style={{ userSelect: 'none' }}
        >
          <ScrollLink to={linkId} smooth={true} spy={true} offset={-40}>
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
              fontSize="lg"
              transition=".1s ease"
              {...rest}
            >
              {children}
            </Flex>
          </ScrollLink>
        </Link>
      </Flex>
    </MotionListItem>
  );
};
