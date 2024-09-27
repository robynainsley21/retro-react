import React, { useState, useEffect } from "react";
import Loader from "../components/Loader.jsx";

export default function About() {
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
    <div id="about">
      <h1>About me</h1>
      <div className="about-hero">
        <div className="col-item">
          <img loading="lazy" src={data.about[0].img_url} alt="about-img" />
        </div>
        <div className="col-item about-text">
          <p>{data.about[0].text1}</p>
          <p>{data.about[0].text2}</p>
        </div>
      </div>
      <div className="about-body">
        <h2>My Interests</h2>
        <div className="interest-container">
          {data.about[1].reading.map((item) => {
            return (
              /* From Uiverse.io by gharsh11032000 */
              <div class="project-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div class="project-card__content">
                  <p class="project-card__title">{item}</p>
                  <p class="project-card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
