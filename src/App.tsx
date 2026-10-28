import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Leadership from "./components/Leadership";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: "var(--bg-primary)", transition: "background-color 0.35s ease" }}>
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
    </ThemeProvider>
  );
}

export default App;