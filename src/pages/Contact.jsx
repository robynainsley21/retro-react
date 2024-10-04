import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
  console.log(data.contact[0]);

  return (
    <div id="contact">
      <h1>I'd love to hear from you.</h1>
      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-item">
            <span>{data.contact[0].number}</span>
          </div>
          <div className="contact-item">
            <Link target="_blank" to={data.contact[0].github}>
              {/* From Uiverse.io by alexmaracinaru  */}
              <button class="cta">
                <span class="hover-underline-animation">GitHub</span>
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
          <div className="contact-item">
            <Link target="_blank" to={data.contact[0].linkedin}>
              {/* From Uiverse.io by alexmaracinaru  */}
              <button class="cta">
                <span class="hover-underline-animation">LinkedIn</span>
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
          <div className="contact-item">
            <span>{data.contact[0].location}</span>
          </div>
        </div>

        {/* From Uiverse.io by D3OXY  */}
        <form action="" className="form">
          <input type="text" placeholder="First name" name="name" />
          <input type="text" placeholder="Last name" name="surname" />
          <input type="email" placeholder="Email" name="email" />

          <textarea
            placeholder="Your message"
            name="message"
            id="contact-msg"
          ></textarea>
          <button className="oauthButton">
            Send
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
