import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Box, Button, Flex, FormControl, FormLabel, Grid, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useDisclosure } from "@chakra-ui/react";
import { Heading, Container } from '@chakra-ui/react'
import { useState } from "react";
function Payment() {
    let [state, setState] = useState('')
    let [price, setPrice] = useState(2000)
    const { isOpen, onOpen, onClose } = useDisclosure()

    let handlepromo=()=>{
        if(state==="masai30"){
            let change=(price*3)/10;
            
        }
    }
    return <Box background="rgb(242,242,242)"  padding= "20px" >

        <Box width= "80%" margin= "auto" >

            <p>Cart</p>
            <Heading>Your Information</Heading>
            <Box width= "100%" >
                
                    <Box mt={30} p={8}  bg={"white"} justify="space-around" borderRadius="10px">
                        <Grid   templateColumns="repeat(2,1fr)" gap="40px">
                            <Box >
                                <FormControl isRequired>
                                    <Input mt={10} placeholder='Last name' />
                                    <Input mt={10} placeholder='First name' />
                                    <NumberInput max={10} min={9}>
                                        <NumberInputField mt={10} placeholder="Phone" />
                                    </NumberInput>
                                    <Input mt={10} type="email" placeholder='Email' />
                                </FormControl>
                            </Box>

                            <Box  w="100%">

                                <FormControl>
                                    <Flex gap={3}>
                                        <Box  >
                                            <FormControl isRequired>
                                            <Input mt={10} w="400px" placeholder="Promo Code"  onChange={(e) => {
                                                {
                                                    setState(e.target.value)
                                                    console.log(state)
                                                }
                                            }} />
                                            </FormControl>
                                            
                                        </Box>
                                        <Box>
                                            <AlertDialog>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    Applied promocode
                                                </AlertDialogHeader>
                                                <AlertDialogBody>You have Got 30%</AlertDialogBody>
                                                <AlertDialogFooter>
                                                    <Button >Ok</Button>
                                                </AlertDialogFooter>
                                            
                                            </AlertDialogContent>
                                            </AlertDialog>
                                            <Button colorScheme='yellow' mt={10} onClick={handlepromo}>Apply</Button>
                                            </Box>
                                    </Flex>
                                </FormControl>
                                <Heading mt="208px" mb={35} size="md">Total  __________________________________________  ${price}</Heading>
                                <Box mt="60px">
                                    <Button colorScheme="red" mr="60px" float={"right"}>Next Step</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                
            </Box>

        </Box>


    </Box>

}
export default Payment;