import * as React from 'react';
import {
  Box,
  Flex,
  List,
  ChakraProps,
  OmitCommonProps,
  useMediaQuery
} from '@chakra-ui/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { motion, useCycle } from 'framer-motion';

import { NavMenuItems, MenuToggle } from '..';
import { useIsPageLoaded } from 'components/hooks/useIsPageLoaded';

type Sidebar = JSX.IntrinsicAttributes &
  OmitCommonProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    keyof ChakraProps
  > &
  ChakraProps & { as?: 'div' | undefined };

const MotionBox = motion(Box);
const MotionList = motion(List);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebarVariant = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

export const Sidebar = ({ ...props }: Sidebar) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isMobile] = useMediaQuery('(max-width: 480px)');
  const [zIndex, setZIndex] = React.useState('0');
  const isPageLoaded = useIsPageLoaded();

  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setZIndex('0');
      }, 1000);
    } else {
      setZIndex('sticky');
    }
  }, [isOpen]);

  return (
    <Box
      as="nav"
      position="fixed"
      zIndex={zIndex}
      top={0}
      left={0}
      pb={10}
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth={[null, '1px']}
      width={['100%', 60]}
      {...props}
    >
      <Flex minHeight="100vh" width="100%" align="center" justify="center">
        {isPageLoaded && (
          <Flex
            width="100%"
            px={6}
            direction="column"
            fontSize="md"
            color="navy"
            aria-label="Main Navigation"
          >
            {isMobile && isPageLoaded ? (
              <MotionBox initial={false} animate={isOpen ? 'open' : 'closed'}>
                <MotionBox
                  bg="white"
                  variants={sidebarVariant}
                  height="100%"
                  position="absolute"
                  width="100%"
                  top={0}
                  left={0}
                  bottom={0}
                  zIndex={-1}
                />
                <MenuToggle toggle={() => toggleOpen()} />
                <MotionList variants={variants}>
                  <NavMenuItems />
                </MotionList>
              </MotionBox>
            ) : (
              <List>
                <NavMenuItems />
              </List>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
