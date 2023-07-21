import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/hero";
import Contact from "./components/Contact/Contact";
import Companies from "./components/Companies/Companies";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Contact />
    </div>
  );
};

export default App;
