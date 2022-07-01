import * as React from 'react';
import {
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Code,
  Link,
  Icon
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';

import { Card } from '~/components';

export const Projects = (): JSX.Element => {
  return (
    <Flex direction="column" gap={5}>
      <Heading color="white" size="2xl">
        Projects
      </Heading>
      <Flex justify="center">
        <SimpleGrid columns={[1, 1, 2]} spacing={5}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

const ProjectCard = (): JSX.Element => {
  return (
    <Card
      width="350px"
      height="350px"
      _hover={{
        transition: 'all 0.25s',
        transform: 'translateY(-10px)'
      }}
    >
      <Flex direction="column" width="100%" justify="space-between">
        <Flex direction="column" width="100%" gap={2}>
          <Heading fontSize="xl" alignSelf="center" p={1}>
            Murphy&apos;s Movies
          </Heading>

          <Text>
            Find trending and upcoming movies, search for a specific title, and
            save your favourites.
          </Text>
          <Text>
            See the{' '}
            <Link href="https://murphys-movies.vercel.app/about" isExternal>
              about page <ExternalLinkIcon />{' '}
            </Link>
            for more technical details.
          </Text>
        </Flex>
        <Flex gap={8} justify="center">
          <Link href="https://github.com/smurph7/movies" isExternal>
            <Icon as={IoLogoGithub} boxSize={9} />
          </Link>
          <Link href="https://murphys-movies.vercel.app" isExternal>
            <Icon as={ExternalLinkIcon} boxSize={9} />
          </Link>
        </Flex>
        <Flex columnGap={5} flexWrap="wrap">
          <Code variant="outline" boxShadow={0} fontSize="xs" p={0}>
            Next.js
          </Code>
          <Code variant="outline" boxShadow={0} fontSize="xs">
            React Query
          </Code>
          <Code variant="outline" boxShadow={0} fontSize="xs">
            React Testing Library
          </Code>
          <Code variant="outline" boxShadow={0} fontSize="xs">
            Stitches
          </Code>
          <Code variant="outline" boxShadow={0} fontSize="xs">
            Auth 0
          </Code>
        </Flex>
      </Flex>
    </Card>
  );
};
