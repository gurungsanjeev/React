import { useEffect, useState } from "react";

const NormalDesign = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([{}]);
  const [experienceInfo, setExperienceInfo] = useState([{}]);
  const [certification, setCertification] = useState([{}]);
  const [achievement, setAchievement] = useState([{}]);
  const [skills, setSkills] = useState([{}]);
  const [projects, setProjects] = useState([{}]);

  useEffect(() => {
    const personal = JSON.parse(localStorage.getItem("personalDetails"));
    const education = JSON.parse(localStorage.getItem("EducationDetails"));
    const experience = JSON.parse(localStorage.getItem("WorkExperiences"));
    const certification = JSON.parse(localStorage.getItem("CertificateData"));
    const achievement = JSON.parse(localStorage.getItem("AchievementData"));
    const skillsData = JSON.parse(localStorage.getItem("SkillsDetails"));
    const projectData = JSON.parse(localStorage.getItem("ProjectData"));

    if (personal) setPersonalInfo(personal);
    if (education) setEducationInfo(education);
    if (experience) setExperienceInfo(experience);
    if (skillsData) setSkills(skillsData);
    if (projectData) setProjects(projectData);
    if (certification) setCertification(certification);
    if (achievement) setAchievement(achievement);
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

        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Profile Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-700">
            {personalInfo.summary}
          </p>
        </section>
        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
profile Section Ends here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}




        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Experiences Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
          {experienceInfo.map((exp, index) =>

          (<div key={index} className="mb-6">
            <h3 className="text-lg font-bold">{exp.institution}</h3>
            <div className="flex items-center justify-between">

              <p className="text-gray-700 italic">{exp.position}</p>

              <p className="text-sm text-gray-500 font-semibold italic">{exp.jDate} to {exp.eDate ? exp.eDate : "Running"}</p>
            </div>
            <p className="text-gray-700 mt-2">
              {exp.role}
            </p>
          </div>
          ))}
        </section>

        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Experiences Section ends here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}



        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Educations Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
          {educationInfo.map((edu, index) => (
            <div key={index} className="mb-4">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-bold">{edu.level}</h3>
                <h3>{edu.gpa}</h3>
              </div>
              <p className="text-gray-700 italic">{edu.affiliated}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </section>
        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Educations Section ends here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}





        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Skills Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}


        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          {skills.map((list, index) => (
            <ul className="list-disc list-inside text-gray-700">
              <li>{list.skills}</li>
            </ul>
          ))}
        </section>
        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Skills Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}




        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Certification Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Certification and Training</h2>
          {certification.map((certifications, index) => (
            <div key={index} className="mb-4">
              {/* *****************************certificate section************************************** */}
              <div>

                <h3 className="text-lg font-bold">{certifications.title}</h3>
                <div className="flex items-center justify-between">

                  <h5 className="italic">{certifications.institution}</h5>
                  <h5 className="italic text-sm">{certifications.date}</h5>
                </div>

              </div>
            </div>
          ))}

          {/* *****************************Acheivement section************************************** */}
          {achievement.map((achievement, index) => (

            <div>

              <h3 className="text-lg font-bold">{achievement.awardtitle}</h3>
              <div className="flex items-center justify-between">

                <h5 className="italic">{achievement.institution}</h5>
                <div className="flex gap-2">

                  <h5 className="italic text-sm">{achievement.awarddate}</h5>
                  <h5 className="italic text-sm">{achievement.year}</h5>
                </div>
              </div>

            </div>


          ))}
        </section>







        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Certification Section Ends here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}




        {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Projects Section Starts here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
          {projects.map((proj, index) => (

            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{proj.title}</h3>
              <p className="text-gray-700">
                {proj.summary}
              </p>
            </div>
          ))}

        </section>
      </div>


      {/* --------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Projects Section ends here
-------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */}



      {/* //////////////////////////////////// This is second layout////////////////////// */}


    </>
  );
};

export default NormalDesign;
