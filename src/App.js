import
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import
{
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Loader,
  Navbar,
  Tech,
  Works
} from "./components";



function App()
{
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no repeat bg-c">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
    </Router>
  );
}

export default App;
