import * as React from 'react';
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  message: string;
  email: string;
};

export const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = React.useState(false);

  // TODO acknowledge success
  const onSubmit: SubmitHandler<FormValues> = (data: {
    name: string;
    message: string;
    email: string;
  }) => {
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_CONTACT_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_CONTACT_DEV_TEMPLATE ?? '',
        {
          name: data.name,
          message: data.message,
          email: data.email
        },
        process.env.NEXT_PUBLIC_CONTACT_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          setIsLoading(false);
          reset();
        },
        error => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <Stack as="form" gap={5} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <Stack gap={[3, 3, 5]}>
          <Flex
            direction={['column', 'column', 'row']}
            align="center"
            justify="center"
            width="100%"
            gap={[3, 3, 5]}
          >
            <Flex direction="column" width="100%">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                {...register('name', {
                  required: 'This is required'
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </Flex>
            <Flex align="center" width="100%">
              <Flex direction="column" width="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Email"
                  {...register('email', {
                    required: 'This is required'
                    // TODO Validate email
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </Flex>
            </Flex>
          </Flex>
          <Flex align="center" width="100%">
            <Flex direction="column" width="100%">
              <FormLabel htmlFor="Message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                {...register('message', {
                  required: 'This is required'
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </Flex>
          </Flex>
        </Stack>
      </FormControl>
      <Flex>
        <Button type="submit" isLoading={isLoading}>
          Contact Me
        </Button>
      </Flex>
    </Stack>
  );
};
