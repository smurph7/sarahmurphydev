import * as React from 'react';
import type { NextPage } from 'next';
import {
  Box,
  Flex,
  Button,
  Stack,
  Heading,
  Text,
  Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IoBusiness } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { GiBrain } from 'react-icons/gi';

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
      bgGradient="linear(to-br, lightLime, brandTeal)"
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
      <Section id="about" gap={3} justify="center">
        <Heading color="white" size="lg" fontStyle="italic">
          "HERE I AM, HEAR ME ROAR"
        </Heading>
        <Heading color="white" size="2xl">
          About Me
        </Heading>
        <Flex align="start">
          <Flex direction="column" gap={3}>
            <Flex p={4} pt={1} width="80%">
              <Text color="navy" fontSize="xl">
                With 4 years of experience and a deeper focus in front end
                development, I am passionate about building responsive,
                user-friendly and performant web apps.
              </Text>
            </Flex>
            <Flex direction={['column', 'column', 'column', 'row']}>
              <Flex direction="column" gap={3} width="50%">
                <Flex justify="start" align="center" gap={5}>
                  <Icon as={GiBrain} boxSize={8} />
                  <Flex
                    bg="rgba(255,255,255,0.3)"
                    borderRadius="2xl"
                    boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
                    p={4}
                  >
                    <Text color="navy">
                      Excellent capability in terms of technology skills and
                      knowledge, with practical application in a business
                      environment.
                    </Text>
                  </Flex>
                </Flex>
                <Flex justify="start" align="center" gap={5}>
                  <Icon as={IoBusiness} boxSize={8} />
                  <Flex
                    bg="rgba(255,255,255,0.3)"
                    borderRadius="2xl"
                    boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
                    p={4}
                    direction="column"
                  >
                    <Text color="navy">
                      Considerable experience in a variety of roles - from
                      technical to business and systems analysis to project
                      coordination - and environments from large scale
                      consulting and financial services to small innovative
                      start-ups.
                    </Text>
                  </Flex>
                </Flex>
                <Flex justify="start" align="center" gap={5}>
                  <Icon as={IoIosPeople} boxSize={8} />
                  <Flex
                    bg="rgba(255,255,255,0.3)"
                    borderRadius="2xl"
                    boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
                    p={4}
                  >
                    <Text color="navy">
                      Quick &amp; eager learner with practical experience in
                      learning development languages and software and training
                      others.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Box
                height={[350, 400]}
                width={[300, 500]}
                borderRadius="50%"
                _hover={{ cursor: 'grab' }}
                _active={{ cursor: 'grabbing' }}
                alignSelf="center"
              >
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                  <fog attach="fog" args={['#202025', 0, 85]} />
                  <WordCloud count={5} radius={23} />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={5}
                  />
                </Canvas>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </Box>
  );
};

export default Home;
