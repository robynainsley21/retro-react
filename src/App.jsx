import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

/**pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AllAchievements from "./pages/AllAchievements";
import AWS from "./components/AllCertificates";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

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
        <Route path="/aws" element={<AWS />} />
      </Routes>
    </Router>
  );
}

export default App;
