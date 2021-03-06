import * as React from 'react';
import {
  Flex,
  Box,
  Stack,
  useBreakpointValue,
  useMediaQuery,
  Icon,
  Link,
  List
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import { NavItem } from '..';
import { Logo } from '~/components';
import { MOBILE_MEDIA_QUERY } from '~/constants';

export const navItems = [
  { title: 'About Me', linkId: 'about' },
  { title: 'Experience', linkId: 'experience' },
  { title: 'Projects', linkId: 'projects' },
  { title: 'Contact', linkId: 'contact' }
];

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

export const NavMenuItems = ({
  toggle
}: {
  toggle?: () => void;
}): JSX.Element => {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <Stack gap={5}>
      <Flex direction="column" gap={5}>
        {isMobile && <LogoLink toggle={toggle} />}
        <Flex direction="column" gap={1}>
          <List>
            {navItems.map(navItem => (
              <NavItem
                key={navItem.title}
                linkId={navItem.linkId}
                onClick={toggle}
                variants={variants}
              >
                {navItem.title}
              </NavItem>
            ))}
          </List>
        </Flex>
      </Flex>
      <SocialMediaLinks />
    </Stack>
  );
};

const SocialMediaLinks = (): JSX.Element => {
  const variant = useBreakpointValue({ base: variants, md: {} });

  return (
    <MotionFlex
      variants={variant}
      justify="center"
      align="center"
      alignSelf="center"
      gap={5}
      pt={6}
      zIndex={0}
    >
      <Link
        aria-label="Github Link"
        href="https://github.com/smurph7"
        isExternal
      >
        <Icon as={IoLogoGithub} boxSize={[12, 12, 12, 9]} />
      </Link>
      <Link
        aria-label="LinkedIn Link"
        href="https://www.linkedin.com/in/sarahmurphydev/"
        isExternal
      >
        <Icon as={IoLogoLinkedin} boxSize={[12, 12, 12, 9]} />
      </Link>
    </MotionFlex>
  );
};

const LogoLink = ({ toggle }: { toggle?: () => void }): JSX.Element => {
  const variant = useBreakpointValue({ base: variants, md: {} });

  return (
    <MotionFlex variants={variant} alignSelf="center">
      <Logo onClick={toggle} position="relative" />
    </MotionFlex>
  );
};
