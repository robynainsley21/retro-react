import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
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
      <p className="fine-text text-center mb-5">Hover image to view details</p>

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

      <div className="row github-row">
        {" "}
        <Link target="_blank" to="https://github.com/robynainsley21">
          {/* From Uiverse.io by alexmaracinaru  */}
          <button class="cta">
            <span class="hover-underline-animation">Visit my GitHub</span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
