import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import { Sidebar, AboutMe, Contact, Home, Logo } from '~/components';

const Section = ({ children, ...props }: any): JSX.Element => {
  return (
    <Flex
      as="section"
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

const SitePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sarah Murphy</title>
        <link rel="icon" href="/static/sm-logo.png" />
      </Head>
      <Box
        bg="lightLime"
        p={4}
        color="navy"
        bgGradient="linear(to-br, lightLime, brandTeal)"
        minHeight="100vh"
      >
        <Sidebar />
        <Logo />
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="experience">Experience</Section>
        <Section id="projects">Projects</Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 5000
          }}
        />
      </Box>
    </>
  );
};

export default SitePage;
