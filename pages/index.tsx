import * as React from 'react';
import type { NextPage } from 'next';
import { Box, Flex, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import { Sidebar, MotionLetter, AboutMe, Contact } from '~/components';

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
      bgGradient="linear(to-br, lightLime, brandTeal)"
      minHeight="100vh"
    >
      <Sidebar />
      <Section id="home">
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
          <ScrollLink to="contact" smooth={true} spy={true} offset={-40}>
            <Button
              color="white"
              size="md"
              variant="outline"
              _hover={{ bg: 'freshLemon', color: 'navy' }}
            >
              Contact me
            </Button>
          </ScrollLink>
        </Stack>
      </Section>
      <Section id="about">
        <AboutMe />
      </Section>
      <Section id="experience">Experience</Section>
      <Section id="projects">Projects</Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Box>
  );
};

export default Home;
