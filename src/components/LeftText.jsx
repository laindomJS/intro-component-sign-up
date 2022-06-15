import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export function LeftText() {
  return (
    <Box display="flex" flexDirection="column" p={4} w={480}>
      <Heading fontSize="45px" color="white" mb={6}>Learn to code by watching others</Heading>
      <Text fontWeight="semibold" lineHeight="1.5" color="white">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers thinks is invaluable.</Text>
    </Box>
  )
}