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
  Button,
  Stack,
  Divider
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';
import { IoLogoGithub } from 'react-icons/io5';

import { Card } from '~/components';

import { projectData, showcaseProject } from './projectData';

type ProjectProps = {
  title: string;
  description: string;
  seeMoreDetailsLink?: string;
  githubLink?: string;
  projectLink?: string;
  stack: string[];
  additionalInfo?: { text?: string[]; images?: string[] };
};

type ShowcaseProps = ProjectProps & { showcaseDescription?: string };

export const Projects = (): JSX.Element => {
  return (
    <Flex direction="column" gap={5}>
      <Heading color="white" size="2xl">
        Projects
      </Heading>
      <Heading color="white" fontSize="lg" fontStyle="italic">
        A few things that I&apos;ve been working on
      </Heading>
      <Showcase />
      <Divider height={2} borderBottomWidth={2} borderStyle="dashed" />
      <Flex>
        <SimpleGrid minChildWidth={['300px', '350px']} spacing={5} width="100%">
          {projectData.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

const Showcase = (): JSX.Element => {
  return (
    <Flex direction="column" gap={4}>
      <Flex direction="column" gap={2}>
        <Heading color="teal.500" size="lg">
          Showcase Project
        </Heading>
        <Text>{showcaseProject.showcaseDescription}</Text>
      </Flex>
      <ProjectCard project={showcaseProject} />
    </Flex>
  );
};

const ProjectCard = ({ project }: { project: ProjectProps }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      <Card
        height="300px"
        _hover={{
          transition: 'all 0.25s',
          transform: 'translateY(-5px)'
        }}
        sx={{ transition: 'all 0.25s', transform: 'translateY(5px)' }}
      >
        <Flex direction="column" width="100%">
          <Flex justify="end" align="center" height="100px">
            <Flex gap={5}>
              {project.githubLink && (
                <Link
                  aria-label={`Github Link - ${project.title}`}
                  href={project.githubLink}
                  isExternal
                >
                  <Icon as={IoLogoGithub} boxSize={9} viewBox="0 0 35 35" />
                </Link>
              )}
              {project.projectLink ? (
                <Link
                  aria-label={`External project link - ${project.title}`}
                  href={project.projectLink}
                  isExternal
                >
                  <Icon as={ExternalLinkIcon} boxSize={9} viewBox="0 0 35 35" />
                </Link>
              ) : (
                <Button
                  aria-label={`Project information - ${project.title}`}
                  onClick={onOpen}
                  variant="unstyled"
                >
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
                  <Link
                    href={project.seeMoreDetailsLink}
                    isExternal
                    color="teal.700"
                  >
                    about page <ExternalLinkIcon />{' '}
                  </Link>
                  for more technical details.
                </Text>
              )}
            </Flex>
            <Flex columnGap={5} flexWrap="wrap">
              {project.stack.map((item: string, index: number) => (
                <Code key={`${item}-${index}`} variant="simple">
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
    <Modal isOpen={isOpen && !project.projectLink} onClose={onClose} size="3xl">
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader textAlign="center">{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center" gap={1} p={5}>
            <Text textAlign="center">{project.description}</Text>
            {project.additionalInfo && (
              <>
                <Stack align="center">
                  {project.additionalInfo.text?.map((text, index) => (
                    <Text key={`addiontional-text-${index}`} textAlign="center">
                      {text}
                    </Text>
                  ))}
                </Stack>
                <Flex py={5} direction="column" gap={5}>
                  {project.additionalInfo.images?.map(image => (
                    <NextImage
                      key={image}
                      src={image}
                      alt={project.title}
                      width="500px"
                      height="300px"
                      objectFit="contain"
                    />
                  ))}
                </Flex>
              </>
            )}

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
