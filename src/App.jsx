import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full"></div>
      <div className="container mx-auto my-auto innerdiv">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
