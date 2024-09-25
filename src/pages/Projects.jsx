import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
export default function Projects() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

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

  if (!data || !data.about) return <Loader />;
  return (
    <div id="projects">
      <h1>Some of my projects</h1>

      <div>
        {data.projects.map((project) => (
          /* From Uiverse.io by andrew-demchenk0 */
          <div className="card">
            <div className="card__img">
              <img src={project.img_url} alt="project-img" />
            </div>
            <div className="card__avatar">
              <img src={project.language_img} alt="lang-img" />
            </div>
            <div className="card__title">{project.projectName}</div>
            <div className="card__subtitle">{project.description}</div>
            <div className="card__wrapper">
              <button className="card__btn">Button</button>
              <button className="card__btn card__btn-solid">Button</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
