import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Projects from "../pages/Projects.jsx";
import Skills from "../pages/Skills.jsx";


const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router className="navbar">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} component={Link} to="/" />
            <Tab
              label="About"
              {...a11yProps(1)}
              component={Link}
              to="/about"
            />
            <Tab
              label="Skills"
              {...a11yProps(2)}
              component={Link}
              to="/skills"
            />
            <Tab label="Projects" {...a11yProps(3)} component={Link} to="/projects" />
            <Tab label="Contact" {...a11yProps(4)} component={Link} to="/contact" />
            
          </Tabs>
        </Box>

        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </Box>
    </Router>
  );
}
