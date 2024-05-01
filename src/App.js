import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Extracurriculars from "./components/Extracurriculars";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef, useEffect, useState } from "react";

import boat from "./images/assets/boat.png";
import Fish from "./components/Fish";

function App() {
  const experienceRef = useRef();
  const activitiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const containerRef = useRef();

  const [width, setWidth] = useState(true);
  const updateDimensions = () => {
    setWidth(window.innerWidth >= 978);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="App">
      <div className={width ? "container-scroll" : "container-mobile"} ref={containerRef}>
        {width && (
          <div style={{ position: "absolute", bottom: "6rem", left: "5rem", zIndex: 10 }}>
            <img src={boat} style={{ height: 157, width: 308, display: "block" }} />
          </div>
        )}

        {width && (
          <>
            <div className="text-white fs-1 fw-bold position-absolute top-50 p-2" style={{ left: 0, zIndex: 10, backgroundColor: "#ff4000" }} onClick={() => containerRef.current.scrollTo({ top: 0, left: containerRef.current.scrollLeft + 500, behavior: "smooth" })}>
              {"<"}
            </div>
            <div className="text-white fs-1 fw-bold position-absolute top-50 p-2" style={{ right: 0, zIndex: 10, backgroundColor: "#ff4000" }} onClick={() => containerRef.current.scrollTo({ top: 0, left: containerRef.current.scrollLeft + 500, behavior: "smooth" })}>
              {">"}
            </div>
          </>
        )}

        {[<Header desktop={width} />, <About />, <Experience desktop={width} prop={experienceRef} />, <Projects prop={projectsRef} />, <Extracurriculars desktop={width} prop={activitiesRef} />, <Upcoming />, <Contact prop={contactRef} />, <Footer desktop={width} />].map((item, idx) => {
          if ([0, 2, 3].includes(idx)) {
            return (
              <>
                <div className={width ? "itemdouble" : "mt-5"}>{item}</div>
                {idx === 0 && (
                  <div className={`${width ? "position-absolute start-50 translate-middle-x" : "d-flex justify-content-center"}`} style={{ bottom: "2rem", zIndex: 10 }}>
                    <div className={`d-flex ${width ? "flex-row  gap-5" : "flex-column gap-2"} justify-content-center`}>
                      <div className="position-relative">
                        <Fish scrollTo={scrollTo} propRef={experienceRef} text={"Experience"} />
                      </div>

                      <div className="position-relative">
                        <Fish scrollTo={scrollTo} propRef={projectsRef} text={"Projects"} />
                      </div>
                      <div className="position-relative">
                        <Fish scrollTo={scrollTo} propRef={activitiesRef} text={"Activities"} />
                      </div>
                      <div className="position-relative">
                        <Fish scrollTo={scrollTo} propRef={contactRef} text={"Contact"} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          }
          return (
            <>
              <div className={width ? "item" : "mt-5"}>{item}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
