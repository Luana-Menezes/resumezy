function ResumeExperience({ experience }){
    return (
        <div className="mb-2">
            <div className="flex justify-between items-center">
              <div>
                {experience.jobTitle && <h2 className="text-md font-bold">{experience.jobTitle}</h2>}
                {experience.company && <p className="font-semibold">{experience.company}</p>}
              </div>
              <div className="text-right">
                {(experience.dateFrom || experience.dateTo) && <p className="font-semibold">{experience.dateFrom} {experience.dateFrom && experience.dateTo && " – "} {experience.dateTo}</p>}
                {experience.location && <p className="italic ">{experience.location}</p>}
              </div>
            </div>
            {experience.desc && experience.desc.length > 0 && <ul className="list-disc ml-5">
                {experience.desc.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>}
        </div>
    )
}

export default ResumeExperience;