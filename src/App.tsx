import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";

import { ChakraProvider } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Navbar />
      <SearchBar />
      <ViewPosts />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
