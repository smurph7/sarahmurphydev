import * as React from 'react';
import { Flex } from '@chakra-ui/react';

type SectionProps = { id: string; children: React.ReactNode; [x: string]: any };

export const Section = ({
  id,
  children,
  ...props
}: SectionProps): JSX.Element => {
  return (
    <Flex
      as="section"
      id={id}
      ml={{ base: 0, md: 60 }}
      p={4}
      minHeight="inherit"
      direction="column"
      justify="center"
      {...props}
    >
      {children}
    </Flex>
  );
};
