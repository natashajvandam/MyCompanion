import React, { useContext } from 'react';
import {
  Text,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Center,
} from '@chakra-ui/react';
import { PetsContext } from './petsContext';

const SidebarContent = ({ onClose, ...rest }) => {
  const { pets, setPets } = useContext(PetsContext);
  return (
    <Box
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      padding={4}
      display="flex"
      flexDir="column"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="3" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Your Pets
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <VStack flexGrow="1">
        {pets && pets.length ? (
          <p>pets length</p>
        ) : (
          <Center h="100%">
            <Text
              fontSize="lg"
              align="center"
              fontWeight="bold"
              color="gray.400"
            >
              You dont have any pets registered, try to add some!
            </Text>
          </Center>
        )}
      </VStack>
      <Button w={'100%'} m>
        Register Pet
      </Button>
    </Box>
  );
};

export default SidebarContent;
