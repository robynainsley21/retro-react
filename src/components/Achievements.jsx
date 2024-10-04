import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function Achievements({ data, loading }) {
  if (loading) return <Loader />;
  if (!data || !data.achievements) return <Loader />;

  return (
    <>
      <div id="achievements">
        <div className="achievement-heading-main">
        <h1>Some of my achievements</h1>
        <Link to="/all-achievements" className="all-achievements-btn">
            {/* From Uiverse.io by alexmaracinaru */}
            <button class="cta">
              <span class="hover-underline-animation"> See all </span>
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

        <div className="row achievement-container">
          {data.achievements.slice(0, 3).map((achievement) => (
            <>
              <div className="achievement-card1">
                <div className="item-main">
                  <h3>{achievement.title}</h3>
                  <h5 className="gray-text mt-3">{achievement.location}</h5>
                </div>
                <div className="achievement-divider"></div>
                <div className="item-main">
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
