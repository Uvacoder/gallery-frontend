import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  // useColorModeValue,
} from "@chakra-ui/react";

import { IProp } from "../utils/types";
import { ViewPostsProps } from "../utils/types";

function ViewPosts({ 
  searchTerm, 
}: ViewPostsProps): any {
  const [data, setData] = useState<IProp[]>([]);
  
  // fetch all posts
  const getPosts = async () => {
    const searchTerm = "frida"; 
    try {
      const response = await fetch(
        `https://api.europeana.eu/record/v2/search.json?profile=standard&query=${searchTerm}&rows=6&start=1&wskey=eutabilla`
      );
      const jsonData = await response.json();
      const items = jsonData.items;
      // console.log(first)

      setData(items);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, [searchTerm]);
  // [] do it at the end of the first render but also anytime searchterm changes

  console.log(data, "this is jsondata");
  return data.map((item: any, index: any) => (
    <div className="flex-container" key={index}>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          // bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"310px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <div
              style={{
                height: 310,
                width: 445,
                backgroundImage: `url(${item.edmIsShownBy ?? item.edmPreview})`,
                backgroundSize: "cover",
                backgroundPosition: "middle",
              }}
            ></div>
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {item.dcCreator ?? "Unknown Artist"} {item.year}
            </Text>
            <Heading
              // color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {item.title}
            </Heading>
            <Text color={"gray.500"} noOfLines={6}>
              {item.dcDescription ?? item.dcDescriptionLangAware}
            </Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar src={item.edmPreview ?? item.edmIsShownBy} alt={"Author"} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>
                {item.dataProvider}, {item.country}
              </Text>
              <Text color={"gray.500"} noOfLines={4}>
                Find {item.title ?? item.dcDescriptionLangAware.en} at{" "}
                <a href="url">{item.source ?? item.edmIsShownAt}</a>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </div>
  ));
}

export default ViewPosts;
