import React, { useState, useEffect } from "react";
import Loader from "../components/Loader.jsx";
import InterestCard from "../components/InterestCard.jsx";

export default function About() {
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
          <p data-aos="fade-up">{data.about[0].text2}</p>
        </div>
      </div>
      <div className="about-body">
        <h2 data-aos="fade-up">Interests of mine</h2>
        <p className="fine-text text-center mb-5">Hover to view details</p>

        <div className="interest-container row">
          {data.about[1].interests.map((item) => {
            return (
              <InterestCard 
                title={item.title}
                details={item.details}
                img={item.img_url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
