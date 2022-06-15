import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, FormControl, FormErrorMessage, Text, Box } from '@chakra-ui/react';
import { Submit } from './Buton';
import './form.css'

export function InputComponent() {

  const {handleSubmit, register, formState: {errors, isSubmitting}, } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve();
      }, 3000)
    })  
  }


  return (
    <Box mt={4} p={8} bgColor="white" borderRadius="8px" display="flex" flexDirection="column" alignItems="center">
      
      <form className='form' onSubmit={handleSubmit(onSubmit)}>

        <FormControl isInvalid={errors.name}>
          <Input 
          id="username" 
          name="firstname" 
          type="username" 
          focusBorderColor="purple.600" 
          mb={6} 
          size="lg" 
          placeholder="First Name" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('firstname', {
            required:'This is required', 
            minLength: {value: 4, message:'Minimum Length should be 4 characters'}
          })}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.name}>
          <Input 
          id="secondname" 
          name="lastname" 
          type="username" 
          focusBorderColor="purple.600" 
          mb={6} 
          size="lg" 
          placeholder="Last Name" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('lastname', {
            required:'This is required', minLength: {value: 4, message:'Minimum Length should be 4 characters'}
          })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
    
        <FormControl isInvalid={errors.email}>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          focusBorderColor="purple.600" 
          mb={6} 
          size="lg" 
          placeholder="Email Address" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('email', {required:'This is required',  pattern: /^\S+@\S+$/i})}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
      


        <FormControl isInvalid={errors.password}>
          <Input 
          id="pswd" 
          name="password" 
          type="password" 
          focusBorderColor="purple.600" 
          mb={6} 
          size="lg" 
          placeholder="Password" 
          _placeholder={ {fontWeight:'semibold', fontSize:15} }
          {...register('password', {
            required : 'This is required', 
            minLength : {value: 6, message:'The password must be contain should be 4 characters'}
          })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
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