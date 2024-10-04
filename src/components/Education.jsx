import Loader from "../components/Loader";
import EduCard from "./EduCard";

export default function Education({ data, loading }) {
  
    if (loading) return <Loader />;
  
    if (!data || !data.education) return <Loader />;

    return(
        <>
        <div id="education" data-aos="fade-up">
            <h1 className="">Education</h1>
            <div className="row mt-5">
                {data.education.map(education => (
                    <EduCard 
                        key={education.id}
                        name={education.edu_name}
                        date={education.date}
                        details={education.details}
                        site={education.site}
                        image={education.img_url}
                    />
                ))}
            </div>
        </div>
        </>
    )
} 