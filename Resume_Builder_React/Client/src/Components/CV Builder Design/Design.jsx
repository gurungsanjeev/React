import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


const Design = () => {

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

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'My_Resume',
        pageStyle: `
            @page { margin: 40px; }
            body { font-family: sans-serif; }
        `
    });



    return (
        <>
            
      {/* Download Button */}
      <div className="text-right mb-4">
        <button 
          onClick={handlePrint} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Download as PDF
        </button>
      </div>

      
            <div ref={componentRef} className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg font-sans leading-relaxed text-gray-900">
                {/* Header */}
                <header className="border-b pb-6 mb-6">
                    <h1 className="text-3xl font-bold uppercase tracking-wide">{personalInfo.fname} {personalInfo.mname} {personalInfo.lname}</h1>
                    <p className="text-lg text-gray-600">{personalInfo.title}</p>
                    <div className="mt-2 text-sm text-gray-500 space-y-1">
                        <p>Email: {personalInfo.email}</p>
                        <p>Phone: {personalInfo.phone}</p>
                        <p>Address: {personalInfo.address}</p>
                        {personalInfo.linkedin && <p>LinkedIn: {personalInfo.linkedin}</p>}
                        {personalInfo.website && <p>Portfolio: {personalInfo.website}</p>}
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold border-b mb-2">Professional Summary</h2>
                    <p className="text-sm text-gray-800">{personalInfo.summary}</p>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold border-b mb-2">Professional Experience</h2>
                    {experienceInfo.map((exp, index) => (
                        <div key={index} className="mb-5">
                            <div className="flex justify-between">
                                <h3 className="font-semibold text-md">{exp.position} – {exp.institution}</h3>
                                <span className="text-sm text-gray-500">{exp.jDate} – {exp.eDate || "Present"}</span>
                            </div>
                            <p className="text-sm text-gray-700">{exp.role}</p>
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
                    {educationInfo.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between">
                                <h3 className="font-semibold text-md">{edu.level} – {edu.affiliated}</h3>
                                <span className="text-sm text-gray-500">{edu.year}</span>
                            </div>
                            <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>
                        </div>
                    ))}
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-gray-200 text-sm px-3 py-1 rounded-full">{skill.skills}</span>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                {certification.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold border-b mb-2">Certifications</h2>
                        {certification.map((cert, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm font-medium">{cert.title} – <span className="italic text-gray-600">{cert.institution}</span></p>
                                <p className="text-xs text-gray-500">{cert.date}</p>
                            </div>
                        ))}
                    </section>
                )}

                {/* Achievements */}
                {achievement.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold border-b mb-2">Achievements</h2>
                        {achievement.map((ach, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm font-medium">{ach.awardtitle} – <span className="italic text-gray-600">{ach.institution}</span></p>
                                <p className="text-xs text-gray-500">{ach.awarddate || ach.year}</p>
                            </div>
                        ))}
                    </section>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                    <section>
                        <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
                        {projects.map((proj, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-md">{proj.title}</h3>
                                <p className="text-sm text-gray-700">{proj.summary}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>





        </>
    )
}

export default Design;
