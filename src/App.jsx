import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
    </main>
  );
};

export default App;
