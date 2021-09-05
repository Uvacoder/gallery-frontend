import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaChrome, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import brush from "../utils/brush.png";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}): JSX.Element => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        // maxH={"20"}
      >
        <img src={brush} alt="logo" width="50" />
        <Stack direction={"row"} spacing={6}>
          <Link href={"https://www.europeana.eu/en/galleries"}>Home</Link>
          <Link href={"https://www.europeana.eu/en/about-us"}>About</Link>
          <Link href={"https://www.europeana.eu/en/blog"}>Blog</Link>
          <Link href={"https://www.europeana.eu/en/galleries"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2021 All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/Europeanaeu"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/user/europeanaeu"}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Website"}
              href={"https://www.europeana.eu/en/galleries"}
            >
              <FaChrome />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
