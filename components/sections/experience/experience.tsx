import * as React from 'react';

import {
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';

import { Card } from 'components/ui';

import type { ExperienceData } from './types';
import { experience } from './experienceData';

export const Experience = (): JSX.Element => {
  return (
    <Card pl={1}>
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
    <Tabs width="100%" orientation="vertical" size="lg">
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
          <TabPanel p={4} pt={0} key={index}>
            <Flex direction="column" gap={1} pb={4}>
              <Heading fontSize="lg">{tab.position}</Heading>
              <Text fontSize="sm">{tab.date}</Text>
            </Flex>
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
                    <TabPanel key={index}>
                      <Text>{subproject.description}</Text>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
