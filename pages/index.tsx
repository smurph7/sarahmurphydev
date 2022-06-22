import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import { Sidebar, AboutMe, Contact, Home, Logo, Section } from '~/components';

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
        <Logo right={[3, 3, null]} left={[null, 3, 3]} mt={[-2, -2, 0]} />
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
