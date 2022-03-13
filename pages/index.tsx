import * as React from 'react';
import type { NextPage } from 'next';
import { Box, Flex, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Sidebar, MotionLetter } from '~/components';

const MotionBox = motion(Box);

const Home: NextPage = () => {
  return (
    <Box
      as="section"
      bg="lightLime"
      p={4}
      color="navy"
      bgGradient="linear(to-br, lightLime, teal)"
      minHeight="100vh"
    >
      <Sidebar />
      <Flex
        ml={{ base: 0, md: 60 }}
        p={4}
        minHeight="inherit"
        direction="column"
        justify="center"
      >
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
          <Button
            color="white"
            size="md"
            variant="outline"
            _hover={{ bg: 'freshLemon', color: 'navy' }}
          >
            Contact me
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Home;
