import { useState, useEffect } from "react";

// pages
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "./Certifications";
export default function Resume() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://robynainsley21.github.io/vue-data-eomp/data/")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Education data={data} loading={loading} />

      <div className="divider"></div>

      <Skills data={data} loading={loading} />

      <Experience data={data} loading={loading}/>


      <Certifications data={data} loading={loading}/>
    </>
  );
}
