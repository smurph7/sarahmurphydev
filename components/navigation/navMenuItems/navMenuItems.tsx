import { NavItem } from '..';

export const navItems = [
  { title: 'About Me', linkId: 'about' },
  { title: 'Experience', linkId: 'experience' },
  { title: 'Projects', linkId: 'projects' },
  { title: 'Contact', linkId: 'contact' }
];

export const NavMenuItems = ({ toggle }: { toggle?: () => void }) => {
  return (
    <>
      {navItems.map(navItem => (
        <NavItem key={navItem.title} linkId={navItem.linkId} onClick={toggle}>
          {navItem.title}
        </NavItem>
      ))}
    </>
  );
};
