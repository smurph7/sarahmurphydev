import * as React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IoBusiness } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { GiBrain } from 'react-icons/gi';

import { WordCloud } from '~/components';
import { IconType } from 'react-icons/lib';

const AboutBubble = ({ icon, text }: { icon: IconType; text: string }) => (
  <Flex justify="start" align="center" gap={[3, 5]}>
    <Icon as={icon} boxSize={[7, 8]} />
    <Flex
      bg="rgba(255,255,255,0.3)"
      borderRadius="2xl"
      boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
      p={4}
    >
      <Text color="navy">{text}</Text>
    </Flex>
  </Flex>
);

export const AboutMe = () => (
  <Flex gap={3} direction="column">
    <Heading color="white" fontSize={['xl', '2xl']} fontStyle="italic">
      &quot;HERE I AM, HEAR ME ROAR&quot;
    </Heading>
    <Heading color="white" size="2xl">
      About Me
    </Heading>
    <Flex align="start">
      <Flex direction="column" gap={3}>
        <Flex
          p={4}
          pt={1}
          pl={0}
          width={['100%', '100%', '100%', '100%', '80%']}
        >
          <Text color="navy" fontSize="xl">
            With 4 years of experience and a deeper focus in front end
            development, I am passionate about building responsive,
            user-friendly and performant web apps.
          </Text>
        </Flex>
        <Flex
          gap={[5, 5, 5, 5, 0]}
          direction={['column', 'column', 'column', 'column', 'row']}
        >
          <Flex
            direction="column"
            gap={3}
            width={['100%', '100%', '100%', '100%', '50%']}
          >
            <AboutBubble
              icon={GiBrain}
              text="Excellent capability in terms of technology skills and
            knowledge, with practical application in a business
            environment."
            />
            <AboutBubble
              icon={IoBusiness}
              text="Considerable experience in a variety of roles - from
        technical to business and systems analysis to project
        coordination - and environments from large scale
        consulting and financial services to small innovative
        start-ups."
            />
            <AboutBubble
              icon={IoIosPeople}
              text="Quick &amp; eager learner with practical experience in
        learning development languages and software and training
        others."
            />
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
  </Flex>
);
