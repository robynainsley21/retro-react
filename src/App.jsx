import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Import your page components
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AllAchievements from "./pages/AllAchievements";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900})
  })

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-achievements" element={<AllAchievements />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
