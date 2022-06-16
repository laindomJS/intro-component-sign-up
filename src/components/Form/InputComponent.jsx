import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, FormControl, FormErrorMessage, Text, Box } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { Submit } from './Buton';
import './form.css'

export function InputComponent() {

  const {handleSubmit, register, formState: {errors, isSubmitting}, } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve();
      }, 3000)
    })  
  }


  return (
    <Box position="relative" mt={4} p={8} bgColor="white" borderRadius="8px" display="flex" flexDirection="column" alignItems="center">
      
      <form className='form' onSubmit={handleSubmit(onSubmit)}>

        <FormControl isInvalid={errors.firstname}>
          <Input 
          name="firstname" 
          type="username" 
          focusBorderColor="purple.600" 
          mb={10} 
          size="lg" 
          placeholder="First Name" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('firstname', {
            required: true, 
            minLength: {value: 4, message:'First Name cannot be empty'}
          })}
        />
        <FormErrorMessage fontSize="12px" fontStyle="italic" position="absolute" top="50px" left="15rem" fontWeight="bold"> <WarningIcon mr="10px" /> {errors.firstname && errors.firstname.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastname}>
          <Input 
          name="lastname" 
          type="username" 
          focusBorderColor="purple.600" 
          mb={10} 
          size="lg" 
          placeholder="Last Name" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('lastname', {
            required: true, minLength: {value: 4, message:'Last Name cannot be empty'}
          })}
          />
          <FormErrorMessage fontSize="12px" fontStyle="italic" position="absolute" top="50px" left="15rem" fontWeight="bold"> <WarningIcon mr="10px" /> {errors.lastname && errors.lastname.message}</FormErrorMessage>
        </FormControl>
    
        <FormControl isInvalid={errors.email}>
        <Input 
          name="email" 
          type="email" 
          focusBorderColor="purple.600" 
          mb={10} 
          size="lg" 
          placeholder="Email Address" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('email', {required: true, message: 'Looks like this is not a email',  pattern: /^\S+@\S+$/i})}
          />
          <FormErrorMessage fontSize="12px" fontStyle="italic" position="absolute" top="50px" left="15rem" fontWeight="bold"> <WarningIcon mr="10px" /> {errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
      


        <FormControl isInvalid={errors.password}>
          <Input 
          name="password" 
          type="password" 
          focusBorderColor="purple.600" 
          mb={10}
          size="lg" 
          placeholder="Password" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('password', {
            required : true, 
            minLength : {value: 6, message:'Password cannot be empty'}
          })}
          />
          <FormErrorMessage fontSize="12px" fontStyle="italic" position="absolute" top="50px" left="15rem" fontWeight="bold"> <WarningIcon mr="10px" /> {errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
      
        <Submit isLoading={isSubmitting} />
      </form>
    
      <Text 
      fontSize="12px" 
      color="gray.400" 
      fontWeight="semibold" mt={2}>By clicking the button, you are agreeing to our <Text fontWeight="bold" display="inline-block" color="red.400" cursor="pointer">Terms and Services</Text></Text>
    </Box>  
  )

}