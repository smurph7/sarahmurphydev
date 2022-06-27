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
  ListItem
} from '@chakra-ui/react';

import { Card } from 'components/ui';

import type { ExperienceData } from './types';
import { experience } from './experienceData';

export const Experience = (): JSX.Element => {
  return (
    <Card pl={1} minHeight="525px">
      <ExperienceTabs experience={experience} />
    </Card>
  );
};

const ExperienceTabs = ({
  experience
}: {
  experience: ExperienceData[];
}): JSX.Element => {
  return (
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
          <TabPanel px={4} py={2} key={index} height="100%">
            <Flex direction="column" height="100%">
              <Flex direction="column" gap={1} pb={4}>
                <Heading fontSize="lg">{tab.position}</Heading>
                <Text fontSize="sm">{tab.date}</Text>
              </Flex>
              <Flex direction="column" height="100%" justify="space-between">
                <List points={tab.points} />
                {tab.subprojects && (
                  <Tabs isFitted>
                    <TabList>
                      {tab.subprojects.map((subproject, index) => (
                        <Tab
                          key={index}
                          color="navy"
                          _active={{ bg: 'transparent' }}
                          _focus={{ outline: 'none' }}
                          _selected={{ borderColor: 'freshLemon' }}
                        >
                          {subproject.title}
                        </Tab>
                      ))}
                    </TabList>
                    <TabPanels>
                      {tab.subprojects.map((subproject, index) => (
                        <TabPanel key={index} pt={3}>
                          <Flex direction="column" gap={2}>
                            <Text fontSize="sm">{subproject.date}</Text>
                            <List points={subproject.points} />
                          </Flex>
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                )}
                {tab.stack && <TechStack stack={tab.stack} />}
              </Flex>
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const List = ({
  points
}: {
  points: ExperienceData['points'];
}): JSX.Element => {
  console.log(points.length);
  if (points.length === 0) {
    return <></>;
  }
  return points.length > 1 ? (
    <UnorderedList spacing={2}>
      {points.map((point, index) => (
        <ListItem key={index}>{point}</ListItem>
      ))}
    </UnorderedList>
  ) : (
    <Text>{points[0]}</Text>
  );
};

const TechStack = ({
  stack
}: {
  stack: ExperienceData['stack'];
}): JSX.Element => {
  return (
    <Flex gap={2} direction="column" alignSelf="end" align="end">
      <Text fontSize="sm" fontWeight="bold">
        Tech Stack
      </Text>
      <Flex gap={2} wrap="wrap" fontSize="sm" align="end">
        {stack?.map((tech, index) => (
          <Text key={`${tech}-${index}`}>
            {index !== 0 && '|'} {tech}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
