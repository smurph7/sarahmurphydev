import * as React from 'react';
import {
  Flex,
  Button,
  ListItem,
  useBreakpointValue,
  Icon,
  Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

type NavItem = { linkId: string; [x: string]: any; children: React.ReactNode };

const MotionListItem = motion(ListItem);
const MotionFlex = motion(Flex);

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

export const SocialMediaLinks = (): JSX.Element => {
  const variant = useBreakpointValue({ base: variants, md: {} });

  return (
    <MotionFlex
      variants={variant}
      justify="center"
      align="center"
      alignSelf="center"
      gap={5}
      pt={6}
    >
      <Link href="https://github.com/smurph7">
        <Icon as={IoLogoGithub} boxSize={9} />
      </Link>
      <Link href="https://www.linkedin.com/in/sarahmurphydev/">
        <Icon as={IoLogoLinkedin} boxSize={9} />
      </Link>
    </MotionFlex>
  );
};

export const NavItem = ({
  linkId,
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
              fontSize="lg"
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
