import Loader from "./Loader";
export default function Experience({ data, loading }) {
  if (loading) return <Loader />;
  if (!data || !data.experiences) return <Loader />;
  console.log(data.experiences);

  return (
    <>
      <div id="experience">
        <h1 className="pb-4">Work Experience</h1>

        <div className="row mono-font">
          {data.experiences.map((experience) => (
            <>
              <div className="experience-row" data-aos="fade-up">
                <div className="exp-card">
                  <h3>{experience.title}</h3>
                  <h6>{experience.company}</h6>
                  <p>{experience.duration}</p>
                </div>
                <div className="">
                  <img
                    className="m-auto"
                    src={experience.img_url}
                    alt="work-img"
                  />
                </div>
              </div>
              <div className="section-divider" data-aos="fade-up"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
