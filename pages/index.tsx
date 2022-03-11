import type { NextPage } from 'next';
import { Box, Button, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box w="100%" bg="freshLemon" p={4} color="freshLemon">
      <Text>Hello</Text>
      <Button bg="brand.navy">Well then</Button>
    </Box>
  );
};

export default Home;
