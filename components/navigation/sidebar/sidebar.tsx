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

export const Sidebar = ({ ...props }: Sidebar): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [zIndexMobile, setZIndexMobile] = React.useState('0');
  const isPageLoaded = useIsPageLoaded();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setZIndexMobile('0');
      }, 1000);
    } else {
      setZIndexMobile('modal');
    }
  }, [isOpen]);

  if (!isPageLoaded) {
    return <></>;
  }

  return isMobile ? (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={zIndexMobile}
    >
      <Flex minHeight="100vh" width="100%" align="center" justify="center">
        <MotionBox
          width="100%"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          <MotionBox
            bg="white"
            variants={sidebarVariant}
            position="absolute"
            height="100%"
            width="100%"
            top={0}
            left={0}
            bottom={0}
            zIndex={-1}
          />
          <MenuToggle toggle={() => toggleOpen()} />
          <MotionList variants={variants}>
            <NavMenuItems toggle={() => toggleOpen()} />
          </MotionList>
        </MotionBox>
      </Flex>
    </Box>
  ) : (
    <Box
      as="nav"
      position="fixed"
      zIndex="sticky"
      top={0}
      left={0}
      pb={10}
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      width={60}
      {...props}
    >
      <Flex minHeight="100vh" width="100%" align="center" justify="center">
        <Flex
          width="100%"
          px={6}
          gap={1}
          direction="column"
          fontSize="md"
          color="navy"
          aria-label="Main Navigation"
        >
          <List>
            <NavMenuItems />
          </List>
        </Flex>
      </Flex>
    </Box>
  );
};
