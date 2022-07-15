import * as React from 'react';
import {
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
  Divider,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Code
} from '@chakra-ui/react';

import { Card } from '~/components';
import { TABLET_MEDIA_QUERY } from '~/constants';
import { useIsPageLoaded } from 'components/hooks/useIsPageLoaded';

import type { ExperienceData } from './types';
import { experience } from './experienceData';

export const Experience = (): JSX.Element => {
  const [isTablet] = useMediaQuery(TABLET_MEDIA_QUERY);
  const isPageLoaded = useIsPageLoaded();

  return (
    <Flex direction="column" gap={5}>
      <Heading color="white" size="2xl">
        Experience
      </Heading>

      {isPageLoaded ? (
        isTablet ? (
          <Card p={0} borderRadius="md">
            <Accordion allowToggle width="100%">
              {experience.map(item => (
                <AccordionItem
                  key={`accordion-${item.company}`}
                  borderRadius="md"
                >
                  <AccordionButton
                    bg="whiteAlpha.400"
                    borderRadius="md"
                    height={14}
                    _expanded={{ bg: 'whiteAlpha.700' }}
                  >
                    <Flex width="100%" justify="space-between">
                      <Text fontSize="lg">{item.company}</Text>
                      <AccordionIcon />
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel>
                    <ExperiencePanel
                      position={item.position}
                      date={item.date}
                      points={item.points}
                      stack={item.stack}
                      subprojectSection={
                        <MobileSubprojects subprojects={item.subprojects} />
                      }
                    />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        ) : (
          <Card
            pl={1}
            maxWidth="1000px"
            minHeight={['525px', '525px', '525px', '600px']}
          >
            <Tabs width="100%" orientation="vertical" size="lg" isFitted>
              <TabList borderLeft="0px">
                {experience.map((tab, index) => (
                  <Tab
                    key={index}
                    borderRightWidth="2px"
                    borderRightStyle="solid"
                    borderRightColor="white"
                    _active={{ bg: 'transparent' }}
                    _focus={{ outline: 'none' }}
                    _selected={{
                      color: 'navy',
                      borderRightColor: 'freshLemon'
                    }}
                  >
                    <Text fontSize="md">{tab.company}</Text>
                  </Tab>
                ))}
              </TabList>
              <TabPanels p={3}>
                {experience.map((tab, index) => (
                  <TabPanel
                    key={`${tab.company}-${index}`}
                    px={4}
                    py={2}
                    height="100%"
                  >
                    <ExperiencePanel
                      position={tab.position}
                      date={tab.date}
                      points={tab.points}
                      stack={tab.stack}
                      subprojectSection={
                        <DesktopSubprojects subprojects={tab.subprojects} />
                      }
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Card>
        )
      ) : (
        <></>
      )}
    </Flex>
  );
};

const ExperiencePanel = ({
  position,
  date,
  points,
  stack,
  subprojectSection
}: Omit<ExperienceData, 'company' | 'subprojects'> & {
  subprojectSection: JSX.Element | null;
}) => (
  <Flex direction="column" height="100%">
    <Flex direction="column" gap={1} pb={4}>
      <Heading fontSize="lg">{position}</Heading>
      <Text fontSize="sm">{date}</Text>
    </Flex>
    <Flex height="100%" direction="column" gap={8} justify="space-between">
      <List points={points} />
      {subprojectSection}
      {stack && <TechStack stack={stack} />}
    </Flex>
  </Flex>
);

const DesktopSubprojects = ({
  subprojects
}: {
  subprojects: ExperienceData['subprojects'];
}): JSX.Element | null => {
  if (!subprojects) {
    return null;
  }

  return (
    <Tabs isFitted height="100%">
      <TabList>
        {subprojects.map((subproject, index) => (
          <Tab
            key={`${subproject.title}-${index}`}
            color="navy"
            fontSize="sm"
            _active={{ bg: 'transparent' }}
            _focus={{ outline: 'none' }}
            _selected={{ borderColor: 'freshLemon' }}
          >
            {subproject.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels p={0} height="100%">
        {subprojects.map((subproject, index) => (
          <TabPanel
            height="100%"
            key={`sub-tab-${subproject.title}-${index}`}
            p={0}
            pb={8}
            pt={3}
          >
            <Flex
              height="95%"
              direction="column"
              gap={8}
              justify="space-between"
            >
              <Flex direction="column" gap={2} pr={3}>
                <List points={subproject.points} />
              </Flex>
              {subproject.stack && <TechStack stack={subproject.stack} />}
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const MobileSubprojects = ({
  subprojects
}: {
  subprojects: ExperienceData['subprojects'];
}): JSX.Element | null => {
  if (!subprojects) {
    return null;
  }

  return (
    <Accordion allowToggle width="95%">
      {subprojects?.map(subproject => (
        <AccordionItem key={`accordion-${subproject.title}`} borderWidth={0}>
          <AccordionButton
            borderTopWidth="1px"
            _expanded={{
              bg: 'whiteAlpha.700',
              borderRadius: 'md'
            }}
          >
            <Flex width="100%" justify="space-between">
              <Text fontSize="md">{subproject.title}</Text>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel>
            <Flex
              direction="column"
              height="100%"
              gap={8}
              justify="space-between"
            >
              <Flex direction="column" gap={2} pr={3}>
                <List points={subproject.points} />
              </Flex>
              {subproject.stack ? (
                <TechStack stack={subproject.stack} />
              ) : (
                <Box pt="44px" />
              )}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const List = ({
  points
}: {
  points: ExperienceData['points'];
}): JSX.Element | null => {
  if (points.length === 0) {
    return null;
  }

  return points.length > 1 ? (
    <UnorderedList spacing={2} fontSize="md">
      {points.map((point, index) => (
        <ListItem key={`point-${index}`}>{point}</ListItem>
      ))}
    </UnorderedList>
  ) : (
    <Text fontSize="md">{points[0]}</Text>
  );
};

const TechStack = ({
  stack
}: {
  stack: ExperienceData['stack'];
}): JSX.Element => {
  const [isTablet] = useMediaQuery(TABLET_MEDIA_QUERY);

  return (
    <Flex
      direction="column"
      alignSelf={isTablet ? 'start' : 'end'}
      align={isTablet ? 'start' : 'end'}
    >
      <Flex gap={2} wrap="wrap" fontSize="xs" align="end">
        {stack?.map((tech, index) => (
          <>
            {index !== 0 && (
              <Divider
                orientation="vertical"
                borderColor="gray"
                maxHeight="12px"
                alignSelf="center"
              />
            )}
            <Code variant="simple" key={`${tech}-${index}`}>
              {tech}
            </Code>
          </>
        ))}
      </Flex>
    </Flex>
  );
};
