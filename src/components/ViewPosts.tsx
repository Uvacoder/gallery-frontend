import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

function ViewPosts(): JSX.Element {
  // creator of media - dcCreator
  const [creator, setCreator] = useState("");
  // year of media creation - year
  const [year, setYear] = useState("");
  // title of painting/media - title, dcTitleLangAware
  const [title, setTitle] = useState("");
  // image - edmIsShownBy, edmPreview
  const [image, setImage] = useState("");
  // description of media - dcDescription,
  const [description, setDescription] = useState("");
  // located at - dataProvider, dcDescriptionLangAware
  const [dataProvider, setDataProvider] = useState("");
  // located country - country
  const [country, setCountry] = useState("");
  // source link - edmIsShownAt
  const [source, setSource] = useState("");

  // fetch all posts
  const getPosts = async () => {
    // const searchTerm = "Uomini  Swatow";
    // const searchTerm = "salvador dali";
    const searchTerm = "frida kahlo";
    // const searchTerm = "vinci";

    try {
      const response = await fetch(
        `https://api.europeana.eu/record/v2/search.json?profile=standard&query=${searchTerm}&rows=3&start=1&wskey=eutabilla`
      );
      const jsonData = await response.json();
      const first = jsonData.items[0];
      // console.log(first)

      const {
        dcCreator,
        year,
        title,
        dcTitleLangAware,
        edmIsShownBy,
        edmPreview,
        dcDescription,
        dcDescriptionLangAware,
        dataProvider,
        country,
        edmIsShownAt,
      } = first;

      // check creator
      if (dcCreator) {
        setCreator(dcCreator);
      }

      // check title
      if (title || dcTitleLangAware) {
        setTitle(title ?? dcTitleLangAware.en);
      } else {
        setTitle("Unknown Creator");
      }

      // check description
      if (dcDescription || dcDescriptionLangAware) {
        setDescription(dcDescription ?? dcDescriptionLangAware.en);
      } else {
        setDescription(
          `Visit ${source} to find further details on this media.`
        );
      }

      setYear(year);
      setImage(edmIsShownBy ?? edmPreview);
      setDataProvider(dataProvider);
      setCountry(country);
      setSource(edmIsShownAt);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  // [] makes one request

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
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
              backgroundImage: `url(${image})`,
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
            {creator[0]} {year}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"} noOfLines={6}>
            {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={image} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>
              {dataProvider}, {country}
            </Text>
            <Text color={"gray.500"} noOfLines={4}>
              Find {title} at <a href="url">{source}</a>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default ViewPosts;
