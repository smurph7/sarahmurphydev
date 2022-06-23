import * as React from 'react';

import { Box, Stack, Text, Divider, Circle } from '@chakra-ui/react';

type Node = {
  title: string;
};

export const Experience = (): JSX.Element => {
  const nodes = [{ title: 'HI' }, { title: 'hullo' }];
  return (
    <Stack align="center">
      <Stack height="100px" align="start" gap={20}>
        <Timeline nodes={nodes} />
      </Stack>
    </Stack>
  );
};

const Timeline = ({ nodes }: { nodes: Node[] }): JSX.Element => {
  return (
    <>
      {nodes.map((node: Node, index: number) => (
        <TimelineNode
          key={node.title}
          node={node}
          side={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </>
  );
};

const TimelineNode = ({
  node,
  side
}: {
  node: Node;
  side: 'left' | 'right';
}): JSX.Element => {
  return (
    <Stack direction="row" align="center" justify="start">
      <Box position="relative">
        <Box position="absolute" left={-12} top={2}>
          {side === 'left' && <Text>{node.title}</Text>}
        </Box>
        <Circle size="40px" bg="white" />
        <Box position="absolute" height="100px" left="49%">
          <Divider
            orientation="vertical"
            borderLeftWidth={2}
            borderRadius="xl"
          />
        </Box>
        <Box position="absolute" right={-12} top={2}>
          {side === 'right' && <Text>{node.title}</Text>}
        </Box>
      </Box>
    </Stack>
  );
};
