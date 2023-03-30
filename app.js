import React from "react";
import Header from "./header";
import Home from "./Home";
import Work from "./Components/Mypassion";
import About from "./Components/About";
import Project from "./projects";
import Skills from "./Components/skillSet";

function App() {
  
  return (
    <div class="container-fluid">
      <Header />
      <Home />
      <Work />
      <Project/>
      <About />
      <Skills/>
  </div>
  );
}

export default App;