import { useEffect, useRef, useState } from "react";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const projectsRef = useRef(null);
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
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#dce9f2] text-gray-500 px-4 py-3 md:p-5 z-50 border-b border-gray-300 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-gray-300" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          {/* Desktop Layout */}
          <div
            // className="flex items-center w-full"
            className="flex flex-col md:flex-row items-center w-full gap-3"
          >
            {/* Left Spacer */}
            <div className="hidden md:block flex-1"></div>

            {/* Center Menu */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
              <button
                className="relative group"
                onClick={() =>
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>

              <button
                className="relative group"
                onClick={() =>
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>

              <button
                className="relative group"
                onClick={() =>
                  skillsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Skills
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>

              <button
                className="relative group"
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF014F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>
            </div>

            {/* Right Button */}
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <button
                className="bg-gray-50 shadow-md font-bold text-[#FF014F] px-4 py-2 text-sm md:px-6 md:py-2 md:text-base rounded-2xl hover:shadow-stone-500"
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
