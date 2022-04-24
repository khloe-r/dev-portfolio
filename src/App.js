import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App pt-5">
      <div className="px-5 mx-5">
        <Header />
        <About />
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
