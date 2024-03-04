import React from 'react'
import { useState } from 'react';
import { Button, Flex, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
} from '@chakra-ui/react'
import Nevbar from '../Component/Nevbar/Nevbar';
import Footer from '../Component/Footer/Footer';

export default function Checkout() {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

let formstyle ={
w:'50%',
m:'auto',
mt:'10',
mb:'10',
flexDirection:'collumn',
p:'5'
}
    return (<>
<Nevbar/>

    <Heading textAlign={'center'} m={5} mb={5} p={0}>Please enter Your detail</Heading>
        <Center>
            <Flex {...formstyle} >
            <FormControl isRequired >
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />

                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />

                <Input type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                        Enter the email
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
                <FormLabel>Amount</FormLabel>
                <NumberInput max={50} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <FormLabel>Country</FormLabel>
                <Select placeholder='Select country'>
                    <option>Select country'</option>
                    <option value={'United'}>United</option>
                    <option value={'India'}>India</option>
                </Select>

                <FormLabel>State</FormLabel>
                <Input placeholder='State' />

                <FormLabel>Districk</FormLabel>
                <Input placeholder='Districk' />

                <FormLabel>Pincode</FormLabel>
                <Input type='number' placeholder='Pincode' />

                <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
            </FormControl>
            </Flex>
        </Center>

        <Footer/>
        </>
    )
}
