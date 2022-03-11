import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type MotionLetter = {
  letter: string;
};

const MotionBox = motion(Box);

export const MotionLetter = ({ letter }: MotionLetter) => (
  <MotionBox
    whileHover={{ scale: 1.4 }}
    whileTap={{ scale: 1.2 }}
    transition={{ type: 'spring', bounce: 0.5 }}
  >
    <Heading color="white" size="4xl" _hover={{ px: 1, color: 'freshLemon' }}>
      {letter}
    </Heading>
  </MotionBox>
);
