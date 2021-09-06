import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";

import { ICard } from "../utils/types";
import { ViewPostsProps } from "../utils/types";

function ViewPosts({ searchTerm }: ViewPostsProps): JSX.Element {
  const [recordData, setRecordData] = useState<ICard[]>([]);

  // fetch default art collection
  const getPosts = async () => {
    if (searchTerm === undefined || searchTerm === "") {
      const response = await fetch(
        `https://api.europeana.eu/record/v2/search.json?profile=standard&query=editoriPromoterDigitalGallery&rows=9&start=1&wskey=eutabilla`
      );
      const jsonData = await response.json();
      const items = jsonData.items;

      setRecordData(items);


    } else {
      // fetch art based on search result
      try {
        const response = await fetch(
          `https://api.europeana.eu/record/v2/search.json?profile=standard&query=${searchTerm}&rows=9&start=1&wskey=eutabilla`
        );
        const jsonData = await response.json();
        const items = jsonData.items;

        setRecordData(items);

      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, [searchTerm]);
  // [] calls function on the first render but also anytime searchterm is updated


  return (
    <>
      <SimpleGrid
        columns={3}
        minChildWidth="30%"
        spacing="20px"
        py={6}
        mx={10}
        mb={10}
      >
        {recordData.map((item: ICard, index: number) => (
          <div key={index}>
            <Box
              maxW={"445px"}
              w={"full"}
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
                    backgroundImage: `url(${
                      item.edmIsShownBy ?? item.edmPreview
                    })`,
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
                  fontSize={"14px"}
                  letterSpacing={1.1}
                >
                  {item.dcCreator ?? searchTerm ?? "Unknown Artist"} {item.year}
                </Text>
                <Heading fontSize={"xl"} fontFamily={"body"} noOfLines={2}>
                  {item.title}
                </Heading>
                <Text color={"gray.500"} fontSize={"14px"} noOfLines={4}>
                  {item.dcDescription ?? item.dcDescriptionLangAware}
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={item.edmPreview ?? item.edmIsShownBy}
                  alt={"Author"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"12px"}>
                  <Text fontWeight={600}>
                    {item.dataProvider}, {item.country}
                  </Text>
                  <Text color={"gray.500"} noOfLines={3} mx={1}>
                    Find {item.title ?? "this artwork"} at{" "}
                    <a href="url">{item.source ?? item.edmIsShownAt}</a>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}

export default ViewPosts;
