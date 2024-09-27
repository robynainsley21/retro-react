import React from "react";

export default function InterestCard({ details, title, img }) {
  return (
    <div className="interest-card" data-aos="fade-up">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path d={img} />
            </svg>
            <strong>{title}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p>
                {details.map((detail) => (
                  <li className="m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 75 100"
                      className="pin"
                    >
                      <line
                        stroke-width="10"
                        stroke="#3085c3"
                        y2="100"
                        x2="37"
                        y1="64"
                        x1="37"
                      ></line>
                      <path
                        stroke-width="8"
                        stroke="#3085c3"
                        d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z"
                      ></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
