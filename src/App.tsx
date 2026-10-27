import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Leadership from "./components/Leadership";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

function App(): JSX.Element {
  return (
    <div className="bg-[#0b0f10] min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Education />
      <WorkExperience />
      <Leadership />
      <Experience />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;