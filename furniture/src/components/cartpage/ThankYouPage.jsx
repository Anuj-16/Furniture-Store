'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Thank you For Shooping With Us!....
            Your Order Will bw Delivered Soon
          </Text>
          <Stack direction={'row'}>
            <Link to="/">
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Home
            </Button>
            </Link>
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}