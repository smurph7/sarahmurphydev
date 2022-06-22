import * as React from 'react';
import { Box, Flex, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import { MotionLetter } from '~/components';

const MotionBox = motion(Box);

export const Home = (): JSX.Element => {
  return (
    <Stack align="start" gap={3}>
      <MotionBox
        drag
        dragConstraints={{
          top: -50,
          left: -20,
          right: 80,
          bottom: 50
        }}
        dragSnapToOrigin
        dragPropagation
        cursor="pointer"
      >
        <Flex>
          <MotionLetter letter="H" />
          <MotionLetter letter="i" />
          <MotionLetter letter="," />
        </Flex>
        <Flex gap={4}>
          <Flex>
            <MotionLetter letter="I" />
            <MotionLetter letter="'" />
            <MotionLetter letter="m" />
          </Flex>
          <Flex>
            <MotionLetter letter="S" />
            <MotionLetter letter="a" />
            <MotionLetter letter="r" />
            <MotionLetter letter="a" />
            <MotionLetter letter="h" />
          </Flex>
        </Flex>
      </MotionBox>
      <Box zIndex={1}>
        <ScrollLink to="contact" smooth={true} spy={true}>
          <Button
            color="white"
            size="md"
            variant="outline"
            _hover={{ bg: 'freshLemon', color: 'navy' }}
          >
            Contact me
          </Button>
        </ScrollLink>
      </Box>
    </Stack>
  );
};
