import React, { useContext, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
Text
,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaShare, FaBars } from 'react-icons/fa';
import { AuthContent } from '../../AuthContent/AuthContentProvider';


function NavbarFirst() {


  const {store}= useContext(AuthContent);
 
  const NumberOfItem = store.length;
  console.log(NumberOfItem);
  const [cartItemCount, setCartItemCount] = useState(NumberOfItem);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      py="3"
      borderBottom='1px'
      
    >
    
      <Box
        width="50px"
        height="50px"
        borderRadius="50%"
       
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight='10px'
        
      >
        <Image src="https://img.freepik.com/premium-vector/m-letter-vector-logo-design-template-graphic-alphabet-symbol-corporate-business-identity_418020-102.jpg?size=626&ext=jpg&ga=GA1.2.1015256055.1691636772&semt=ais" alt="Logo" borderRadius="50%" />
      </Box>
      <Flex
        display={{ base: 'none', md: 'flex' }} // Hide on small screens, show on medium screens and above
        justifyContent="space-between"
        alignItems="center"
        gap="8" // Adjust the gap between items
      >
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Chair
      </Text>
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Table
      </Text>
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Lamps
      </Text>
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Sofas
      </Text>
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Cases
      </Text>
      <Text fontSize="md" fontWeight="bold" colorScheme="gray">
        Other
      </Text>
      </Flex>
      <Flex alignItems="center" gap="4">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.700" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Tooltip label="Favorite">
          <IconButton aria-label="Favorite" icon={<FaHeart />} variant="ghost" colorScheme="gray" />
        </Tooltip>
        <Tooltip label="Share">
          <IconButton aria-label="Share" icon={<FaShare />} variant="ghost" colorScheme="gray" />
        </Tooltip>
        <Flex alignItems="center" gap="2">
          <Tooltip label="Cart Page">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              colorScheme="gray"
            />
          </Tooltip>
          <Box
          ml="-6"
          p="1"
          color="red"
          borderRadius="full"
          fontWeight="bold"
          fontSize="sm"
          minWidth="1.5rem"
          textAlign="center"
          marginBottom='15px'
        >
          {cartItemCount}
        </Box>
        </Flex>
        <Tooltip label="Menu">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ // Add hover effect styling
                color: 'teal.500',
                backgroundColor: 'transparent',
              }}
            />
            <MenuList
              _hover={{ // Add hover effect styling for the MenuList
                backgroundColor: 'gray.100',
              }}
            >
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Chair</MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Table</MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Lamps</MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Sofas</MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Cases</MenuItem>
              <MenuItem _hover={{ backgroundColor: 'teal.500', color: 'white' }}>Other</MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>
        <Button colorScheme="blue" size="md" width="50%"  bg='#f79525'>
      Login
    </Button>
      </Flex>
    </Box>
  );
}

export default NavbarFirst;
