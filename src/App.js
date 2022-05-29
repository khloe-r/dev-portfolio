import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import News from "./components/News";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App pt-5">
      <div className="px-lg-5 px-xs-1 mx-lg-5">
        <Header />
        <About />
        <News />
        <Experience />
        <Projects />
        <Upcoming />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
