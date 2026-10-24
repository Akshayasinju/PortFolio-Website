
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <Navbar />

      <div className="container theme-control">
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-pressed={dark}
        >
          {dark ? "Switch to light mode" : "Switch to dark mode"}
        </button>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
