import React from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGamepad,
  faTv,
  faFilm,
  faInfinity,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(faGamepad, faTv, faFilm, faInfinity, faSearch);

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
