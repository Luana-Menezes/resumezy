
import { useState, useRef } from "react";
import ResumeExperience from "./ResumeExperience";
import ResumePersonal from "./ResumePersonal";
import ResumeEducation from "./ResumeEducation";
import ResumeSection from "./ResumeSection";

function Resume({ personal, education, experience }) {
    const resumeRef = useRef();
    const [scale, setScale] = useState(1);

    const printResume = () => {
        const resumeToPrint = resumeRef.current.innerHTML;
        const newPrintWindow =  window.open("", "_blank", "width=800,height=900");
        

        if (newPrintWindow)
            newPrintWindow.document.write(`
                <html>
                    <head>
                        <title>My Resumezy</title>
                        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                    </head>
                    <body onload="window.print(); window.close();">
                        ${resumeToPrint}
                    </body>
                </html>
            `);

            newPrintWindow.document.close();
    }

    const onZoomChange = (e) => {
        setScale(parseFloat(e.target.value));
    }

    const transformOrigin = scale > 1 ? "left top" : "center top";

    return (
        <main className="w-3/4 flex flex-col items-center overflow-hidden">
            <div className="sticky top-0 left-0 z-10 py-2 bg-gray-300 w-full">
                <div className="flex justify-center items-center gap-x-8">
                    <div className="flex items-center gap-x-4">
                        <label htmlFor="zoom" className="text-sm font-semi-bold">Zoom:</label>
                        <input id="zoom" type="range" min="0.5" max="2" step="0.1" value={scale} onChange={onZoomChange} className="bg-gradient-to-r from-[#df26d3] to-[#044fab] text-white h-2 rounded-lg appearance-none cursor-pointer accent-sky-900" />
                        <span className="text-sm text-slate-900">{Math.round(scale * 100)}%</span>
                    </div>
                    <button onClick={printResume} className="bg-gradient-to-r from-[#df26d3] to-[#044fab] text-white rounded-md px-3 py-1 text-sm hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Save in .pdf</button>
                </div>
            </div>

            <div className="flex flex-col items-center h-full w-full overflow-scroll bg-gray-400">
                <div ref={resumeRef}
                    className="min-h-[297mm] w-[210mm] p-[10mm] my-4 bg-white shadow-black shadow-lg resume-font"
                    style={{
                        transform:`scale(${scale})`,
                        transformOrigin: transformOrigin
                    }}
                >
                    <div className="h-full w-full overflow-y-hidden">
                        {personal && <ResumeSection title=''>
                            <ResumePersonal personal={personal} />
                        </ResumeSection>}

                        {education && education.length > 0 && <ResumeSection title="Education">
                            {education.map((entry, index) => (
                                <ResumeEducation key={index} education={entry} />
                            ))}
                        </ResumeSection>}

                        {experience && experience.length > 0 && <ResumeSection title="Experience">
                            {experience.map((entry, index) => (
                                <ResumeExperience key={index} experience={entry} />
                            ))}
                        </ResumeSection>}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Resume;