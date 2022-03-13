import { NavItem } from '..';

export const navItems = [
  { title: 'About Me' },
  { title: 'Experience' },
  { title: 'Projects' },
  { title: 'Contact' }
];

export const NavMenuItems = () => {
  return (
    <>
      {navItems.map(navItem => (
        <NavItem key={navItem.title}>{navItem.title}</NavItem>
      ))}
    </>
  );
};
