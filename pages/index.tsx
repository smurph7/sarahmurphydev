import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import {
  Sidebar,
  AboutMe,
  Experience,
  Projects,
  Contact,
  Home,
  Logo,
  Section
} from '~/components';
import { MOBILE_MEDIA_QUERY } from '~/constants';

const SitePage: NextPage = () => {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Head>
        <title>Sarah Murphy</title>
        <link rel="icon" href="/static/sm-logo-250px.png" />
      </Head>
      <Sidebar />
      <Box
        bg="lightLime"
        p={4}
        color="navy"
        bgGradient="linear(to-br, lightLime, brandTeal)"
        minHeight="100vh"
      >
        {!isMobile && <Logo />}
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
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
