import { useState } from 'react';
import './styles/index.css';
import AsideSection from './components/AsideSection';
import AsideEducation from './components/AsideEducation';
import AsideExperience from './components/AsideExperience';
import AsidePersonal from './components/AsidePersonal';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  const [personal, setPersonal] = useState({
    name: "Jane Silva",
    email: "jane_silva@provider.com",
    tel: "+55 11 99999-9999",
    linkedin: "http://linkedin.com/in/username",
    site: "http://janesilvadesign.com.br"
  });

  const [personalVisible, setPersonalVisible] = useState(false);

  const [education, setEducation] = useState([
    {
      school: "Carnegie Mellon University",
      title: "Master’s in Human-Computer Interaction",
      dateFrom: "Sep 2020",
      dateTo: "May 2022",
      location: "San Charles, BR"
    },
    {
      school: "Parsons School of Design",
      title: "Bachelor of Fine Arts in Interaction Design",
      dateFrom: "Sep 2015",
      dateTo: "May 2019",
      location: "Sant Paul, BR"
    },
  ]);

  const addEducation = () => {
    setEducation([...education, {
      school: "",
      title: "",
      dateFrom: "",
      dateTo: "",
      location: ""
    }]);
  };

  const updateEducation = (index, updatedData) => {
    const newEducation = [...education];
    newEducation[index] = updatedData;
    setEducation(newEducation);
  };

  const [educationVisible, setEducationVisible] = useState(false);

  const deleteEducation = (entryToDelete) => {
    const updatedEducation = education.filter(entry => entry !== entryToDelete);
    setEducation(updatedEducation);
  };

  const [experience, setExperience] = useState([
    {
      company: "Creative Studio",
      jobTitle: "UX/UI Designer",
      desc: [
        "Designed end-to-end user flows for a finance app, resulting in a 20% improvement in usability scores.",
        "Led workshops with cross-functional teams to align on design strategy and user needs.",
        "Conducted usability tests and iterated designs based on feedback to enhance the final product."

      ],
      dateFrom: "Jan 2022",
      dateTo: "Present",
      location: "Saint Paul, BR"
    },
    {
      company: "Innovate Digital",
      jobTitle: "Junior UX Designer",
      desc: [
        "Built responsive designs for an e-commerce platform, increasing conversion rates by 35%.",
        "Created interactive prototypes using Figma, collaborating with developers for a seamless handoff.",
        "Performed user research and surveys, leading to actionable insights for design improvements."
      ],
      dateFrom: "Jul 2020",
      dateTo: "Dec 2021",
      location: "Saint Charles, BR"
    },
    {
      company: "Bright Future Tech",
      jobTitle: "UX Design Intern",
      desc: [
        "Assisted in redesigning a nonprofit website, simplifying navigation and improving accessibility.",
        "Shadowed senior designers during client meetings and user interviews.",
        "Designed mockups and low-fidelity wireframes for small-scale web projects."
      ],
      dateFrom: "May 2019",
      dateTo: "Jun 2020",
      location: "Saint Paul, BR"
    },
  ]);

  const addExperience = () => {
    setExperience([...experience, {
      company: "",
      jobTitle: "",
      desc: [],
      dateFrom: "",
      dateTo: "",
      location: ""
    }]);
  };

  const updateExperience = (index, updatedData) => {
    const newExperience = [...experience];
    newExperience[index] = updatedData;
    setExperience(newExperience);
  };

  const [experienceVisible, setExperienceVisible] = useState(false);

  const deleteExperience = (entryToDelete) => {
    const updatedExperience = experience.filter(entry => entry !== entryToDelete);
    setExperience(updatedExperience);
  };

  return (
    <div className='flex flex-col w-screen h-screen'>
      <div className='sticky top-0 z-10 h-14'>
        <Header />
      </div>
      <div className='flex flex-row w-full h-full overflow-hidden'>
        <aside className='w-1/3 overflow-y-scroll px-4 pt-2 pb-6 bg-gray-200'>
          <AsideSection title="Personal Information" visibility={personalVisible} toggleVisibility={() => setPersonalVisible(!personalVisible)}
            sectionIcon={
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" />
              </svg>
            }
          >
            <AsidePersonal formData={personal} onSave={(updatedData) => setPersonal(updatedData)} />
          </AsideSection>

          <AsideSection title="Education" visibility={educationVisible} toggleVisibility={() => setEducationVisible(!educationVisible)}
            sectionIcon={
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14">
                <path d="m12.499 12.255c0.0968 0 0.18838-0.0436 0.24934-0.11884 0.06096-0.0752 0.08473-0.17385 0.06473-0.26853l-0.20215-0.95662c0.11512-0.11137 0.18749-0.26686 0.18749-0.43975 0-0.182-0.08106-0.34343-0.20688-0.45558v-3.322l-0.81033 0.50146v2.8206c-0.12582 0.11215-0.2069 0.27358-0.2069 0.45558 0 0.17291 0.07239 0.32841 0.18752 0.43975l-0.20217 0.95662c-0.02 0.0947 0.0038 0.19335 0.06473 0.26853 0.06096 0.0752 0.15254 0.11884 0.24934 0.11884h0.62528zm0.27466-7.4999-5.2716-3.2633c-0.15439-0.0951-0.32843-0.14284-0.50247-0.14284s-0.34821 0.0477-0.50166 0.14284l-5.2717 3.2633c-0.14077 0.0871-0.22626 0.24094-0.22626 0.40651 0 0.1656 0.085494 0.31949 0.22626 0.40673l5.2717 3.2633c0.15345 0.0952 0.32762 0.14284 0.50166 0.14284s0.34811-0.0477 0.50247-0.14284l5.2717-3.2633c0.14077-0.0872 0.22626-0.24113 0.22626-0.40673 0-0.16557-0.08549-0.31946-0.22626-0.40651zm-5.7741 5.0297c-0.32838 0-0.64888-0.0912-0.92824-0.26411l-3.075-1.9037v3.278c0 0.97016 1.7932 1.7555 4.0032 1.7555 2.2109 0 4.0039-0.78536 4.0039-1.7555v-3.278l-3.0749 1.9037c-0.27936 0.17291-0.60063 0.26411-0.92901 0.26411z" />
              </svg>}
          >
            {education.map((entry, index) => (
              <AsideEducation entry={entry} key={index} onSave={(updatedData) => updateEducation(index, updatedData)} onDelete={deleteEducation} />
            ))}
            <div className="mt-4 flex justify-center gap-x-6">
              <button type="button" onClick={addEducation} className="bg-gradient-to-r from-[#df26d3] to-[#044fab] rounded px-3 py-2 text-sm font-semibold text-white hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Add new education</button>
            </div>
          </AsideSection>

          <AsideSection title="Experience" visibility={experienceVisible} toggleVisibility={() => setExperienceVisible(!experienceVisible)}
            sectionIcon={
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" />
              </svg>
            }
          >
            {experience.map((entry, index) => (
              <AsideExperience entry={entry} key={index} onSave={(updatedData) => updateExperience(index, updatedData)} onDelete={deleteExperience} />
            ))}
            <div className="mt-4 flex justify-center gap-x-6">
              <button type="button" onClick={addExperience} className="bg-gradient-to-r from-[#df26d3] to-[#044fab] rounded px-3 py-2 text-sm font-semibold text-white hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Add new experience</button>
            </div>
          </AsideSection>

        </aside>
        <Resume personal={personal} education={education} experience={experience} />
      </div>
    </div >
  )
}

export default App;
