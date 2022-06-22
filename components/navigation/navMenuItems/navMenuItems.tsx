import { Box, Stack } from '@chakra-ui/react';
import { NavItem, SocialMediaLinks } from '..';

export const navItems = [
  { title: 'About Me', linkId: 'about' },
  { title: 'Experience', linkId: 'experience' },
  { title: 'Projects', linkId: 'projects' },
  { title: 'Contact', linkId: 'contact' }
];

export const NavMenuItems = ({ toggle }: { toggle?: () => void }) => {
  return (
    <Stack gap={5}>
      <Box>
        {navItems.map(navItem => (
          <NavItem key={navItem.title} linkId={navItem.linkId} onClick={toggle}>
            {navItem.title}
          </NavItem>
        ))}
      </Box>
      <SocialMediaLinks />
    </Stack>
  );
};
