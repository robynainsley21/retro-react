import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllAchievements() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://robynainsley21.github.io/vue-data-eomp/data/")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data || !data.achievements) return <Loader />;

  return (
    <>
      <div id="all-achievements">
        {/* back btn  */}

        <div className="achievement-heading-box">
          <Link className="back-btn" to="/about">
            {/* From Uiverse.io by AKAspidey01 */}
            <button class="cta">
              <svg
                id="arrow-right"
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
              <span class="hover-underline-animation"> Back </span>
            </button>
          </Link>
          <h1>Achievements</h1>
          {/* back btn  */}
        </div>

        <div className="row">
          {data.achievements.map((achievement) => (
            <>
              <div className="achievement-card" data-aos="fade-up">
                <div className="item">
                  <h3>{achievement.title}</h3>
                  <h5 className="gray-text mt-3">{achievement.location}</h5>
                </div>
                <div className="achievement-divider"></div>
                <div className="item">
                  <p>{achievement.date}</p>
                  <p>{achievement.details}</p>
                  {achievement.site && (
                    <p>
                      <Link target="_blank" to={achievement.site}>
                        {/* From Uiverse.io by alexmaracinaru  */}
                        <button class="cta">
                          <span class="hover-underline-animation">
                            See more
                          </span>
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
                    </p>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
