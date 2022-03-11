import type { NextPage } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="lightLime"
      p={4}
      color="navy"
      bgGradient="linear(to-br, lightLime, teal)"
    >
      <Text>Hello there</Text>
      <Heading color="white" size="4xl">
        Welcome
      </Heading>
    </Box>
  );
};

export default Home;
