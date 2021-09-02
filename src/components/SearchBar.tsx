import { Input, Button, Stack, Text } from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

function SearchBar(): JSX.Element {
//   return (
//     <>
//       <Center>
//         <Stack>
//           <Heading
//             color={useColorModeValue("gray.700", "white")}
//             fontSize={"2xl"}
//             fontFamily={"body"}
//           >
//             Rediscover the Arts
//           </Heading>
//           <Text color={"gray.500"} noOfLines={6}>
//             Discover inspiring art, artists and stories in the digitised
//             collections of European museums, galleries, ibraries and archives.
//             Explore paintings, drawings, engravings and sculpture from cultural
//             heritage institutions across Europe.
//           </Text>
//         </Stack>
//       </Center>
//       <Input placeholder="Search your favourite artist or media" />
//       <Button colorScheme="teal" variant="outline">
//         Search
//       </Button>
//     </>
//   );

    return (
    <div>
     <Stack spacing={8}>
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
      <Input placeholder="Search your favourite artist or media" />
      <Button colorScheme="teal" variant="outline" paddingStart="2">
         Search
       </Button>
    </div> 
    );
}

export default SearchBar;
// p={5}
// shadow="md"
// borderWidth="1px"
// flex="1"
// borderRadius="md"
