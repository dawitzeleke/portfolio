import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import WorkExperience from "./components/WorkExperience";
import Leadership from "./components/Leadership";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <WorkExperience />
      <Leadership />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;