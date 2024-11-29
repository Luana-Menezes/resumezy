function ResumeSection ({ title, children }) {
    return (
       <section className="mb-2">
            {title &&
                <h2 className="border-b border-black text-xl font-bold my-2 uppercase">{title}</h2>
            }
            {children}
       </section>
    )
}

export default ResumeSection;