import { useState, useEffect } from "react";

const NormalDesign = () => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [achievement, setAchievement] = useState([]);
  const [certification, setCertification] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [project, setProject] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const storedCertificates = localStorage.getItem("Certificate Data");
    const storedAchievements = localStorage.getItem("Achievement Data");
    const storedPersonal = localStorage.getItem("personalDetails");
    const storedExperiences = localStorage.getItem("Work Experiences");
    const storedSkills = localStorage.getItem("Skills Data");
    const storedProjects = localStorage.getItem("Project Data");
    const storedEducations = localStorage.getItem("EducationDetails");

    if (storedCertificates) setCertification(JSON.parse(storedCertificates));
    if (storedAchievements) setAchievement(JSON.parse(storedAchievements));
    if (storedPersonal) setPersonalDetails(JSON.parse(storedPersonal));
    if (storedExperiences) setExperiences(JSON.parse(storedExperiences));
    if (storedSkills) setSkills(JSON.parse(storedSkills));
    if (storedProjects) setProject(JSON.parse(storedProjects));
    if (storedEducations) setEducation(JSON.parse(storedEducations));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans bg-white shadow-md rounded-xl">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{personalDetails.fullName || "Your Name"}</h1>
        <p className="text-gray-600">{personalDetails.profession || "Your Profession"}</p>
      </header>

      <hr className="my-4" />

      {/* Profile Section */}
      {personalDetails.profile && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-700">{personalDetails.profile}</p>
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold">{exp.companyName}</h3>
              <p className="text-gray-700 italic">{exp.jobTitle}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate || "Present"}
              </p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p className="text-gray-700 italic">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.startYear} - {edu.endYear}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects Section */}
      {project.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
          {project.map((proj, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{proj.projectTitle}</h3>
              <p className="text-gray-700">{proj.projectDescription}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default NormalDesign;
