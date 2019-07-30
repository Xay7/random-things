import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
