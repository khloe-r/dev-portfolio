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
import airplane from "./images/assets/airplane.png";
import Fish from "./components/Fish";

function App() {
  const experienceRef = useRef();
  const activitiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const containerRef = useRef();

  const [isLooping, setIsLooping] = useState(false);

  const handleAirplaneClick = () => {
    if (isLooping) return; // prevent re-trigger mid-animation
    setIsLooping(true);
    setTimeout(() => setIsLooping(false), 1000);
  };

  const [x, setX] = useState(0);
  const [width, setWidth] = useState(true);
  const updateDimensions = () => {
    setWidth(window.innerWidth >= 978);
  };

  const [airplaneBottom, setAirplaneBottom] = useState(6); // in rem

  //
  const airplaneIntervals = [
    { start: 0, end: 200, type: "static", height: 6 },
    { start: 300, end: 1000, type: "rise", from: 6, to: 40 },
    { start: 1000, end: 3000, type: "static", height: 40 },

    { start: 3000, end: 3500, type: "fall", from: 40, to: 6 },
    { start: 3500, end: 5000, type: "static", height: 6 },

    { start: 5000, end: 5500, type: "rise", from: 6, to: 40 },

    { start: 4600, end: Infinity, type: "static", height: 40 },
  ];

  const getAirplaneHeight = (x) => {
    for (const seg of airplaneIntervals) {
      if (x >= seg.start && x < seg.end) {
        if (seg.type === "static") return seg.height;
        const progress = (x - seg.start) / (seg.end - seg.start);
        return seg.from + (seg.to - seg.from) * progress;
      }
    }
    return 6;
  };
  //
  const [height, setHeight] = useState("6rem");

  //
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const x = containerRef.current?.scrollLeft ?? 0;

        // // fix for boat height too, same bug pattern
        // if (x > 2000 && x < 2500) {
        //   setHeight(`${7 + (x - 2000) / 2000}rem`);
        // } else {
        //   setHeight("6rem");
        // }
        setX(x);

        setAirplaneBottom(getAirplaneHeight(x));
      });
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  };

  return (
    <div className="App">
      <div className={width ? "container-scroll" : "container-mobile"} ref={containerRef}>
        {/* {width && (
          <div style={{ position: "absolute", bottom: height, left: "5rem", zIndex: 10 }}>
            <img src={boat} style={{ height: 157, width: 308, display: "block" }} />
          </div>
        )} */}
        {width && (
          <div style={{ position: "absolute", bottom: `${airplaneBottom}rem`, right: "5rem", zIndex: 10 }}>
            <img src={airplane} onClick={handleAirplaneClick} className={`airplane-img ${isLooping ? "airplane-looping" : ""}`} style={{ height: 61, width: 110, display: "block", cursor: "pointer" }} />{" "}
          </div>
        )}

        {width && (
          <>
            {x !== 0 && (
              <div className="text-white fs-1 fw-bold position-absolute top-50 p-2" style={{ left: 0, zIndex: 10, backgroundColor: "#000" }} onClick={() => containerRef.current.scrollTo({ top: 0, left: containerRef.current.scrollLeft - 1500, behavior: "smooth" })}>
                {"<"}
              </div>
            )}
            <div className="text-white fs-1 fw-bold position-absolute top-50 p-2" style={{ right: 0, zIndex: 10, backgroundColor: "#000" }} onClick={() => containerRef.current.scrollTo({ top: 0, left: containerRef.current.scrollLeft + 1500, behavior: "smooth" })}>
              {">"}
            </div>
          </>
        )}

        {[<Header desktop={width} />, <About />, <Experience desktop={width} prop={experienceRef} />, <Projects prop={projectsRef} />, <Contact prop={contactRef} />, <Footer desktop={width} />].map((item, idx) => {
          if ([3].includes(idx)) {
            return (
              <>
                <div className={width ? "itemdouble" : "mt-5"}>{item}</div>
              </>
            );
          }
          return (
            <>
              <div className={width ? "item" : "mt-5"}>{item}</div>
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
                      <Fish scrollTo={scrollTo} propRef={contactRef} text={"Contact"} />
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
