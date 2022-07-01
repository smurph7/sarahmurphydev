import * as React from 'react';
import {
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Code,
  Link,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';

import { IoLogoGithub } from 'react-icons/io5';

import { Card } from '~/components';

const projectData = [
  {
    title: "Murphy's Movies",
    description:
      'Find trending and upcoming movies, search for a specific title, and save your favourites.',
    seeMoreDetailsLink: 'https://murphys-movies.vercel.app/about',
    githubLink: 'https://github.com/smurph7/movies',
    projectLink: 'https://murphys-movies.vercel.app',
    stack: [
      'Next.js',
      'React Query',
      'React Testing Library',
      'Stitches',
      'Auth 0'
    ]
  },
  {
    title: 'Jokester',
    description:
      'A fun slackbot that tells jokes when you message it. Uses JokeAPI.',
    githubLink: 'https://github.com/smurph7/jokester-slackbot',
    stack: ['JavaScript', 'Slack Bolt']
  }
];

type ProjectProps = {
  title: string;
  description: string;
  seeMoreDetailsLink?: string;
  githubLink: string;
  projectLink?: string;
  stack: string[];
};

export const Projects = (): JSX.Element => {
  return (
    <Flex direction="column" gap={5}>
      <Heading color="white" size="2xl">
        Projects
      </Heading>
      <Flex>
        <SimpleGrid minChildWidth="300px" spacing={5} width="100%">
          {projectData.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

const ProjectCard = ({ project }: { project: ProjectProps }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      <Card
        height="350px"
        _hover={{
          transition: 'all 0.25s',
          transform: 'translateY(-5px)'
        }}
        sx={{ transition: 'all 0.25s', transform: 'translateY(5px)' }}
      >
        <Flex direction="column" width="100%">
          <Flex justify="end" align="center" height="100px">
            <Flex gap={5}>
              <Link href={project.githubLink} isExternal>
                <Icon as={IoLogoGithub} boxSize={9} viewBox="0 0 35 35" />
              </Link>
              {project.projectLink ? (
                <Link href={project.projectLink} isExternal>
                  <Icon as={ExternalLinkIcon} boxSize={9} viewBox="0 0 35 35" />
                </Link>
              ) : (
                <Button onClick={onOpen} variant="unstyled">
                  <Icon as={ExternalLinkIcon} boxSize={9} viewBox="0 0 35 35" />
                </Button>
              )}
            </Flex>
          </Flex>
          <Flex direction="column" justify="space-between" height="100%">
            <Flex direction="column" width="100%" gap={2} justify="start">
              <Heading fontSize="xl" alignSelf="center" p={1}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
              {project.seeMoreDetailsLink && (
                <Text>
                  See the{' '}
                  <Link href={project.seeMoreDetailsLink} isExternal>
                    about page <ExternalLinkIcon />{' '}
                  </Link>
                  for more technical details.
                </Text>
              )}
            </Flex>
            <Flex columnGap={5} flexWrap="wrap">
              {project.stack.map((item: string, index: number) => (
                <Code
                  key={`${item}-${index}`}
                  variant="outline"
                  boxShadow={0}
                  fontSize="xs"
                  p={0}
                >
                  {item}
                </Code>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

const ProjectModal = ({
  isOpen,
  onClose,
  project
}: {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectProps;
}) => {
  return (
    <Modal isOpen={isOpen && !project.projectLink} onClose={onClose} size="xl">
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader textAlign="center">{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center" gap={5} p={5}>
            {project.description}
            <NextImage
              src="/static/sm-logo-250px.png"
              alt="logo"
              width="100px"
              height="100px"
            />
            <Link
              href={project.githubLink}
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                colorScheme="yellow"
                variant="outline"
                onClick={onClose}
                leftIcon={<Icon as={IoLogoGithub} boxSize={9} />}
              >
                View on Github
              </Button>
            </Link>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
