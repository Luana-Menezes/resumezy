function ResumeEducation({ education }){
    return (
        <div className="flex justify-between items-center mb-2">
            <div>
              {education.school && <h3 className="text-md font-semibold">{education.school}</h3>}
              {education.title && <p className="italic">{education.title}</p>}
            </div>
            <div className="text-right">
              {(education.dateFrom || education.dateTo) && <p className="font-semibold">{education.dateFrom} {education.dateFrom && education.dateTo && " – "} {education.dateTo}</p>}
              {education.location && <p className="italic">{education.location}</p>}
            </div>
        </div>
    )
}

export default ResumeEducation;