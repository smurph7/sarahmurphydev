import * as React from 'react';
import type { NextPage } from 'next';
import { Box, Flex, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Sidebar, MotionLetter, WordCloud } from '~/components';

const MotionBox = motion(Box);

const Section = ({ children, ...props }: any): JSX.Element => {
  return (
    <Flex
      as="section"
      ml={{ base: 0, md: 60 }}
      p={4}
      minHeight="inherit"
      direction="column"
      justify="center"
      {...props}
    >
      {children}
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <Box
      bg="lightLime"
      p={4}
      color="navy"
      bgGradient="linear(to-br, lightLime, teal)"
      minHeight="100vh"
    >
      <Sidebar />
      <Section>
        <Stack align="start" gap={3}>
          <MotionBox
            zIndex={1}
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
      </Section>
      <Section justify="start" align="center">
        <Box
          height={[350, 500]}
          width={[300, 500]}
          borderRadius="50%"
          _hover={{ cursor: 'grab' }}
          _active={{ cursor: 'grabbing' }}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <WordCloud count={5} radius={20} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
          </Canvas>
        </Box>
      </Section>
    </Box>
  );
};

export default Home;
