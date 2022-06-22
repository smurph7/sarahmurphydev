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
  Textarea,
  Heading
} from '@chakra-ui/react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type FormValues = {
  name: string;
  message: string;
  email: string;
};

type FormInputValues = {
  label: string;
  error?: FieldError;
  input: JSX.Element;
};

export const Contact = (): JSX.Element => (
  <Stack gap={12}>
    <Stack gap={1}>
      <Heading color="white" size="2xl">
        Contact Me
      </Heading>
      <Stack>
        <Heading color="white" fontSize="lg" fontStyle="italic">
          Currently living in Dublin and interested in new opportunities
        </Heading>
      </Stack>
    </Stack>
    <Box
      p={5}
      bg="rgba(255,255,255,0.3)"
      borderRadius="2xl"
      boxShadow="rgb(0 0 0 / 10%) 0px 5px 10px 5px"
      maxWidth="1000px"
    >
      <ContactForm />
    </Box>
  </Stack>
);

const ContactForm = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = React.useState(false);

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
          toast.success('Message sent!');
          setIsLoading(false);
          reset();
        },
        error => {
          setIsLoading(false);
          toast.error('Message failed. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <Stack as="form" gap={5} onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={[3, 3, 5]}>
        <Flex
          direction={['column', 'column', 'row']}
          align="center"
          justify="center"
          width="100%"
          gap={[3, 3, 5]}
        >
          <FormInput
            label="Name"
            error={errors.name}
            input={
              <Input
                id="name"
                bg="gray.100"
                placeholder="Name"
                {...register('name', {
                  required: 'Please enter your name'
                })}
              />
            }
          />
          <FormInput
            label="Email"
            error={errors.email}
            input={
              <Input
                id="email"
                bg="gray.100"
                placeholder="Email"
                {...register('email', {
                  required: 'Please enter your email address',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Please enter a valid email address'
                  }
                })}
              />
            }
          />
        </Flex>
        <FormInput
          label="Message"
          error={errors.message}
          input={
            <Textarea
              id="message"
              bg="gray.100"
              placeholder="Message"
              {...register('message', {
                required: 'Please enter your message'
              })}
            />
          }
        />
      </Stack>
      <Flex>
        <Button
          type="submit"
          isLoading={isLoading}
          size="md"
          px={10}
          _hover={{ bg: 'freshLemon', color: 'navy' }}
        >
          Send
        </Button>
      </Flex>
    </Stack>
  );
};

const FormInput = ({ label, error, input }: FormInputValues): JSX.Element => (
  <Flex align="center" width="100%">
    <Flex direction="column" width="100%">
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={label} fontWeight="bold">
          {label}
        </FormLabel>
        {input}
        <FormErrorMessage>{error && error.message}</FormErrorMessage>
      </FormControl>
    </Flex>
  </Flex>
);
