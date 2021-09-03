import { Input, Button, Stack, Text, Center } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

import { SearchBarProps } from "../utils/types";


function SearchBar({ setSearchTermFinal }: SearchBarProps): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Stack spacing={8} mt={2}>
        <Box
          p={10}
          shadow="md"
          borderWidth="0.5px"
          borderRadius="lg"
          bgColor={"gray.50"}
        >
          <Heading fontSize="xx-large" textAlign="center">
            Rediscover the Arts
          </Heading>
          <Text mt={4} color={"gray.600"} textAlign="center">
            Discover inspiring art, artists and stories in the digitised
            collections of European museums, galleries, ibraries and archives.
            Explore paintings, drawings, engravings and sculpture from cultural
            heritage institutions across Europe.
          </Text>
        </Box>
      </Stack>
      <Input
        maxW={"lg"}
        mt={5}
        ml={1}
        alignContent={"center"}
        placeholder="Search your favourite artist or media"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Button colorScheme="teal" variant="outline" paddingStart="4" maxW={"lg"}
        onClick = {() => setSearchTermFinal(searchTerm)}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
