import Loader from "./Loader";
export default function Skills({ data, loading }) {
  if (loading) return <Loader />;
  return (
    <>
      <div className="row" id="skills">
        <h1 data-aos="fade-up">Skills</h1>
        <div className="row">
          {data.skills.map((skill) => (
            <div className="col-md-3 skill-card p-auto" data-aos="fade-up">
              <div className="skillIcon mt-4">
                <img
                  className="m-auto icon"
                  src={skill.img_url}
                  alt="skill-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
