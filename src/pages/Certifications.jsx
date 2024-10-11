import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Certifications({ data, loading }) {

  if (loading) return <Loader />;

  if (!data || !data.certificates) return <Loader />;
  return (
    <>
      <div id="certifications">
        <h1>Certificates</h1>

        <div className="row">
          {data.certificates.slice(0, 2).map((certificate) => (
            <div className="col-md-4 certificate-card" data-aos="fade-up">
              <h4 className="certificate-title">{certificate.title}</h4>
              <h5>Issued: {certificate.completed}</h5>
              <img src={certificate.img_url} alt="certificate-img" />
<p>              <Link target="_blank" to={certificate.link}>
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
              </Link></p>
              <div className="divider"></div>
            </div>
            
          ))}
        </div>

        <div className="row certificate-row">
          <Link target="_blank" to="/aws">
            {/* From Uiverse.io by alexmaracinaru  */}
            <button className="cta certification-link">
              <span className="hover-underline-animation">All certificates</span>
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
          {/* <AWS data={data} loading={loading}/> */}
        </div>
      </div>
    </>
  );
}
