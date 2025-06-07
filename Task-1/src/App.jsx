import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";

export default function App() {
  return (
    <div className="scroll-smooth h-auto w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] min-h-screen text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
