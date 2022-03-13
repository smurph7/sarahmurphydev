import { Flex, Link, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type NavItem = { [x: string]: any; children?: any };

const MotionListItem = motion(ListItem);

export const NavItem = ({ children, ...rest }: NavItem) => {
  return (
    <MotionListItem
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', bounce: 0.7 }}
    >
      <Flex width="100%" align="center" justify="center">
        <Link
          width="100%"
          _hover={{ textDecoration: 'none' }}
          style={{ userSelect: 'none' }}
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
            {...rest}
          >
            {children}
          </Flex>
        </Link>
      </Flex>
    </MotionListItem>
  );
};
