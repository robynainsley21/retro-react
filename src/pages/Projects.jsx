import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
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

  if (loading) return <Loader />;

  if (!data || !data.projects) return <Loader />;
  return (
    <div id="projects" className="row mt-5">
      <h1>Some of my projects</h1>
      <p className="fine-text text-center mb-5">Hover to view details</p>

      <div className="row">
        {data.projects.map((project) => (
          <ProjectCard
            imageUrl={project.img_url}
            title={project.projectName}
            description={project.description}
            github={project.github}
            live={project.hosted_link}
          />
        ))}
      </div>
    </div>
  );
}
