import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <ChakraProvider>
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ViewPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
