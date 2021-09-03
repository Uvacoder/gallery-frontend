import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";

import { useState } from "react";

function App(): JSX.Element {
  const [searchTermFinal, setSearchTermFinal] = useState<string>("");

  return (
    <>
      <Navbar />
      <SearchBar setSearchTermFinal={setSearchTermFinal} />
      <ViewPosts searchTerm={searchTermFinal} />
      <Footer />
    </>
  );
}

export default App;
