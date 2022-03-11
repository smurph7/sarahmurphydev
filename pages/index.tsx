import type { NextPage } from 'next';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { Sidebar } from '../components/sidebar';

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
        pb={16}
        minHeight="inherit"
        direction="column"
        justify="center"
      >
        <Heading color="white" size="4xl">
          Hi,
        </Heading>
        <Heading color="white" size="4xl">
          I&#39;m Sarah
        </Heading>
      </Flex>
    </Box>
  );
};

export default Home;
