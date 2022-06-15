import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Buton } from './Form/Buton';
import { InputComponent } from './Form/InputComponent';

export function Control() {

  return (
    <Flex direction="column" w={500}>

      <Buton />

      <InputComponent />
   
    </Flex>
  )
}
