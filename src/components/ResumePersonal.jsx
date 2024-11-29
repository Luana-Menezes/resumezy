function ResumePersonal({ personal }){
    return (
        <div className="text-center">
            {personal.name && <h1 className="text-4xl font-bold">{personal.name}</h1>}
            <p>
                {personal.tel && personal.tel} 
                {personal.email && personal.email && " | "}
                {personal.email && <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>}
                {personal.email && personal.linkedin &&  " | "}
                {personal.linkedin && <a href={personal.linkedin} className="underline">{personal.linkedin}</a>}
                {personal.linkedin && personal.site && " | "} 
                {personal.site && <a href={personal.site} className="underline">{personal.site}</a>}
            </p>
        </div>
    )
}

export default ResumePersonal;