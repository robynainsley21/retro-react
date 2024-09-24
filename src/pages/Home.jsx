import React, { useContext } from "react";
import { DataContext } from "../components/DataProvider";
import Loader from "../components/Loader";

export default function Home() {
  const data = useContext(DataContext);
  if (!data) {
    return <Loader />;
  }

  return (
    <div id="home">
      <h1>Hi, I'm Robyn</h1>
      <div className="home-hero">
        <div className="cube">
          <img loading="lazy" src={data.jobTitle[0].img_url} alt="home-img" />
        </div>
        <div className="home-info">
          <h2>Robyn Carnow</h2>
          <h5>{data.jobTitle[0].title}</h5>
          <div className="home-socials">
            <ul class="wrapper">
              <li class="icon linkedIn">
                <span class="tooltip">LinkedIn</span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/robyn-carnow-2b0762267/"
                  className="home-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="1.2em"
                    fill="currentColor"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.14-330.4c-31.2 0-56.36-25.16-56.36-56.36S22.94 4.9 54.14 4.9 110.5 30.06 110.5 61.26s-25.17 56.34-56.36 56.34zm394.26 330.4h-92.68V302.4c0-34.7-12.48-58.4-43.68-58.4-23.8 0-38 16-44.28 31.44-2.28 5.4-2.84 13-2.84 20.64v151.92h-92.76s1.24-246.6 0-272.1h92.76v38.48c12.32-19 34.4-46 83.64-46 61 0 106.68 39.84 106.68 125.44z" />
                  </svg>
                </a>
              </li>
              <li class="icon github">
                <span class="tooltip">GitHub</span>
                <a
                  className="home-link"
                  target="_blank"
                  href="https://github.com/robynainsley21"
                >
                  <svg
                    height="1.8em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="github"
                  >
                    <path d="M12 .296c-6.63 0-12 5.37-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.806 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.922.43.37.812 1.1.812 2.22 0 1.605-.015 2.896-.015 3.293 0 .319.217.694.825.576C20.565 22.092 24 17.593 24 12.296c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
