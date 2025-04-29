import { useEffect, useState } from "react";

const Preview = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const personal = JSON.parse(localStorage.getItem("personalDetails"));
    const education = JSON.parse(localStorage.getItem("EducationDetails"));
    const experience = JSON.parse(localStorage.getItem("WorkExperiences"));
    const skillsData = JSON.parse(localStorage.getItem("SkillsDetails"));

    if (personal) setPersonalInfo(personal);
    if (education) setEducationInfo(education);
    if (experience) setExperienceInfo(experience);
    if (skillsData) setSkills(skillsData);
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 font-sans bg-white shadow-md rounded-xl">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">{personalInfo.fname} {personalInfo.mname} {personalInfo.lname}</h1>
          <p className="text-gray-600">{personalInfo.title}</p>
        </header>

        <hr className="my-4" />

        {/* Profile Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-700">
            {personalInfo.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
          {experienceInfo.map((exp, index) =>

          (<div key={index} className="mb-6">
            <h3 className="text-lg font-bold">{exp.institution}</h3>
            <div>

              <p className="text-gray-700 italic">{exp.position}</p>

            </div>
            <p className="text-sm text-gray-500">{exp.jDate} - {exp.eDate}</p>
            <p className="text-gray-700 mt-2">
              {exp.role}
            </p>
          </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
            {educationInfo.map((edu, index) => (
          <div className="mb-4">
              

            <h3 className="text-lg font-bold">{educationInfo.level}</h3>
            <p className="text-gray-700 italic">{educationInfo.institution}</p>
            <p className="text-sm text-gray-500">2021 - 2025</p>
          </div>
            ))}
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python, SQL, JavaScript</li>
            <li>ETL, Data Warehousing</li>
            <li>React, Node.js</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Git, Docker, Linux</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Expense Tracker App</h3>
            <p className="text-gray-700">
              Built a full-stack MERN application that allows users to track expenses,
              visualize data through charts, and reset transaction history.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Online Bakery System</h3>
            <p className="text-gray-700">
              Designed and implemented an online bakery platform using the waterfall
              model, integrating product ingredient visibility and secure user login.
            </p>
          </div>
        </section>
      </div>



      {/* //////////////////////////////////// This is second layout////////////////////// */}

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Resume Preview</h1>

        {/* Personal Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p>Name: {personalInfo.fname}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <p>School: {educationInfo.school}</p>
          <p>Degree: {educationInfo.degree}</p>
          <p>Year: {educationInfo.year}</p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p>Company: {experienceInfo.company}</p>
          <p>Position: {experienceInfo.position}</p>
          <p>Duration: {experienceInfo.duration}</p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>• {skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Preview;
