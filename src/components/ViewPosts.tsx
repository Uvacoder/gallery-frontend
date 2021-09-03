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
  const [data, setData] = useState<ICard[]>([]);

  // fetch default art collection
  const getPosts = async () => {
    if (searchTerm === undefined || searchTerm === "") {
      const response = await fetch(
        `https://api.europeana.eu/record/v2/search.json?profile=standard&query=editoriPromoterDigitalGallery&rows=6&start=1&wskey=eutabilla`
      );
      const jsonData = await response.json();
      const items = jsonData.items;
      // console.log(first)

      setData(items);
    } else {
      // fetch art based on search result
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
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
  // [] do it at the end of the first render but also anytime searchterm is updated

  console.log(data, "this is jsondata");

  return (
    <>
      {data.map((item: ICard, index: number) => (
        <SimpleGrid columns={3} minChildWidth="30%" py={6} ml={10} key={index}>
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
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {item.dcCreator ?? searchTerm ?? "Unknown Artist"} {item.year}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {item.title}
              </Heading>
              <Text color={"gray.500"} noOfLines={4}>
                {item.dcDescription ?? item.dcDescriptionLangAware}
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={item.edmPreview ?? item.edmIsShownBy}
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
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
        </SimpleGrid>
      ))}
    </>
  );
}

export default ViewPosts;
