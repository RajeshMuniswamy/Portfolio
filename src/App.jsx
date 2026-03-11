import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  const projectsRef = useRef(null);
  // const experience = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#dce9f2] text-gray-500 p-5 z-50 border-b border-gray-300 transition-all duration-300 ${scrolled ? "shadow-lg shadow-gray-300" : ""}`}
      >
        <div className="flex items-center">
          {/* Left Spacer */}
          <div className="flex-1"></div>

          {/* Center Menu */}
          <div className="flex space-x-8 justify-center">
            <button
              className="relative group"
              onClick={() =>
                aboutRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>

            {/* <button
              className="relative group"
              onClick={() =>
                experience.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button> */}

            <button
              className="relative group"
              onClick={() =>
                projectsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>

            <button
              className="relative group"
              onClick={() =>
                skillsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              Skills
            </button>

            <button
              className="relative group"
              onClick={() =>
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              Contact
            </button>
          </div>

          {/* Right Button */}
          <div className="flex-1 flex justify-end mr-4">
            <button
              className="bg-gray-50 shadow-md font-bold text-[#FF014F] px-6 py-2 rounded-2xl
              hover:shadow-stone-500
              "
              onClick={() =>
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Components */}
      <About ref={aboutRef} />
      {/* <Experience ref={experience} /> */}
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
