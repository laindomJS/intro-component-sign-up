import React from 'react';
import { Button, Text } from '@chakra-ui/react';

export function Buton() {
  return (
    <Button px={16} py={6 } bgColor="purple.700" fontWeight="bold" color="white" boxShadow="lg" _hover={ {bgColor:'purple.400'} }> Try it free 7 days   <Text ml="5px" fontWeight="light">then $20/mo. thereafter</Text> </Button>
  )
}

export function Submit() {
  return (
    <Button type="submit" textTransform="uppercase" color="white" bgColor="green.400" fontWeight="semibold" mx="auto" w="100%" h={50} borderRadius={4} _hover={ {backgroundColor:'green.200'} }>Claim your free trial</Button>
  )
}