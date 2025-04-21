
import { useState } from "react";

const Project = () => {
    const [sections, setSections] = useState([{ level: "", institution: "", year: " ", gpa: "" }])



    // ****Adding new section ******
    const handleAddSection = () => {
        setSections([...sections, { level: "", institution: "", year: "", gpa: "" }]);
    };
    // ****Delete  section ******
    const handleDeleteSection = (indexToDelete) => {
        const updatedSections = sections.filter((_, index) => index !== indexToDelete);
        setSections(updatedSections);
    };


    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Projects / Research Work (optional)</legend>

                        {sections.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="firstName" className="block font-medium mb-1">Educations</label>
                                            <select name="" id="" className="w-full h-[42px] border border-blue-400 rounded-lg">
                                                <option value="Secondary">-----Education-----</option>
                                                <option value="Secondary">Secondary</option>
                                                <option value="Higher">Higher</option>
                                                <option value="Undergraduate">Undergraduate</option>
                                                <option value="Postgraduate">Postgraduate</option>
                                                <option value="Phd">Phd</option>
                                            </select>

                                        </div>

                                        {/* Educational Institution */}
                                        <div>
                                            <label htmlFor="lastName" className="block font-medium mb-1">Name of Education Institution</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Year of completed */}
                                        <div>
                                            <label htmlFor="address" className="block font-medium mb-1">Completed year</label>
                                            <input
                                        type="date"
                                        id="dob"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                        </div>

                                        {/* Age */}
                                        <div>
                                            <label htmlFor="age" className="block font-medium mb-1">Secured GPA</label>
                                            <input
                                                type="number"
                                                id="gpa"
                                                required
                                                placeholder="4.0"
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {/* Delete Button (if more than one section) */}
                                        {sections.length > 1 && (
                                            <div className="md:col-span-2 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteSection(index)}
                                                    className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                                >
                                                    Delete Section
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <hr className="mt-6 border border-gray-300" />
                                </div>
                            </>

                        ))}
                        <div className="flex flex-col float-right mt-6 ">



                            <input type="button" onClick={handleAddSection} value="Add another section" className="bg-blue-700 mt-2  text-white rounded-lg hover:bg-blue-800 px-12 py-2" />

                        </div>
                    </fieldset>

                </form>
            </div>
        </>
    )
}

export default Project
