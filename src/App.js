import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Loading from "./components/Loading";
import Experience from "./components/Experience";
import Extracurriculars from "./components/Extracurriculars";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState, useRef } from "react";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);

  const ref = useRef();

  const scrollTo = (page) => {
    ref.current.scrollTo(page);
    console.log("scrolling");
  };

  return (
    <div className="App pt-xs-5">
      <div className="px-xs-1">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Parallax pages={9} ref={ref}>
              <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#FFF27C" }} />
              <ParallaxLayer factor={1.5} offset={3.5} speed={1} style={{ backgroundColor: "#FFF27C" }} />
              <ParallaxLayer offset={6.5} speed={1} style={{ backgroundColor: "#FFF27C" }} />
              <ParallaxLayer offset={8} speed={1} style={{ backgroundColor: "#FFF27C" }} />

              <ParallaxLayer offset={0.3} speed={0.5} factor={3} style={{ marginLeft: "20%", fontSize: 40 }}>
                &#128029;
              </ParallaxLayer>
              <ParallaxLayer offset={4.3} speed={0.5} factor={3} style={{ marginLeft: "-40%", fontSize: 40 }}>
                &#128029;
              </ParallaxLayer>
              <ParallaxLayer offset={7.3} speed={0.5} factor={3} style={{ marginLeft: "40%", fontSize: 40 }}>
                &#128029;
              </ParallaxLayer>

              <ParallaxLayer offset={0.8} speed={0.5} style={{ marginLeft: "-25%", fontSize: 40 }}>
                &lt;/&gt;
              </ParallaxLayer>

              <ParallaxLayer sticky={{ start: 1, end: 9 }} speed={0.5} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-start", height: 60, width: 200 }}>
                <p className="ms-4 highlight">
                  <a onClick={() => ref.current.scrollTo(0)}> ^ back to top</a>
                </p>
              </ParallaxLayer>

              <ParallaxLayer
                offset={0}
                speed={0.1}
                // onClick={() => parallax.current.scrollTo(1)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Header scrollTo={scrollTo} />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={0.1}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <About />
              </ParallaxLayer>

              <ParallaxLayer
                factor={1}
                offset={2}
                speed={-0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Experience />
              </ParallaxLayer>

              <ParallaxLayer
                factor={1}
                offset={3.5}
                speed={-0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Extracurriculars />
              </ParallaxLayer>

              <ParallaxLayer
                offset={5}
                speed={0.5}
                // onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Projects />
              </ParallaxLayer>

              <ParallaxLayer
                offset={6.5}
                speed={0.5}
                // onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Upcoming />
              </ParallaxLayer>

              <ParallaxLayer
                offset={7.5}
                speed={0.1}
                // onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Contact />
              </ParallaxLayer>

              <ParallaxLayer
                offset={8}
                speed={0.1}
                // onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Footer />
              </ParallaxLayer>
            </Parallax>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
