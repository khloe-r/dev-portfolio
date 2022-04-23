import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App pt-5">
      <div className="px-5 mx-5">
        <Header />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
