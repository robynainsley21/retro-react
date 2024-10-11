import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AWS() {
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

  if (!data || !data.certificates) return <Loader />;

  return (
    <div id="aws-comp">

      <div className="certification-heading-box">
          <Link className="back-btn" to="/resume">
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
          <h1>AWS Certificates</h1>
          {/* back btn  */}
        </div>


      <div className="row">
        {data.certificates.map((certificate) => (
          <div className="col-md-4 certificate-card" data-aos="fade-up">
            <h4 className="certificate-title">{certificate.title}</h4>
            <h5>Issued: {certificate.completed}</h5>
            <img src={certificate.img_url} alt="certificate-img" />
            <Link target="_blank" to={certificate.link}>
              {/* From Uiverse.io by alexmaracinaru  */}
              <button className="cta">
                <span className="hover-underline-animation">View</span>
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
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
