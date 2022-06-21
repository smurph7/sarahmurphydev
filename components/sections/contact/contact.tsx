import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_CONTACT_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_CONTACT_DEV_TEMPLATE ?? '',
        {
          name: 'Sarah',
          message: 'hi there, gib job now',
          email: 'emaillll3@gmail.com'
        },
        process.env.NEXT_PUBLIC_CONTACT_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <Button onClick={sendEmail}>Contact Me</Button>
    </Box>
  );
};
