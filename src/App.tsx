import ViewPosts from "./components/ViewPosts";
import SmallCentered from "./components/Footer";

import { ChakraProvider } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <ViewPosts />
      <SmallCentered />
    </ChakraProvider>
  );
}

export default App;
