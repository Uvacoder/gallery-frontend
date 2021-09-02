import { Input, Button, Stack, Text } from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

function SearchBar(): JSX.Element {

    return (
    <div>
     <Stack spacing={8} mt={2}>
       <Box p={10} shadow="md" borderWidth="0.5px" borderRadius="lg" bgColor={"gray.50"}>
        <Heading fontSize="xx-large" textAlign='center'>Rediscover the Arts</Heading>
        <Text mt={4} color={"gray.600"} textAlign='center'>
            Discover inspiring art, artists and stories in the digitised
            collections of European museums, galleries, ibraries and archives.
            Explore paintings, drawings, engravings and sculpture from cultural
            heritage institutions across Europe.
        </Text>
        </Box>
      </Stack>
      <Input placeholder="Search your favourite artist or media" maxW={"lg"} mt={5} alignContent={'center'}/>
      <Button colorScheme="teal" variant="outline" paddingStart="4" maxW={"lg"}>
         Search
       </Button>
    </div> 
    );
}

export default SearchBar;
