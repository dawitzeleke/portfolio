import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App(): JSX.Element {
  return (
    <div className="bg-[#0b0f10] min-h-screen">
      <NavBar />
      <Home />
      <Portfolio />
      <About />
      <WorkExperience />
      <Experience />
      <Leadership />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;