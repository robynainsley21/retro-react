export default function EduCard({ name, key, date, details, site, image }) {
  return (
    <>
      {/* From Uiverse.io by Prince4fff   */}
      <div className="edu-card col" id={key}>
        <a className="card1" href={site} target="_blank">
          <img src={image} alt="edu-img" />
          <p className="edu-title">{name}</p>
          <p>{date}</p>

          <p className="small">{details}</p>
          <div className="go-corner" href={site} target="_blank">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </>
  );
}
