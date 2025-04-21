
import { useState } from "react";

const Skills = () => {
    const [sections, setSections] = useState([{ level: "", institution: "", year: " ", gpa: "" }])



    // ****Adding new section ******
    const handleAddSection = () => {
        setSections([...sections, { level: "", institution: "", year: "", gpa: "" }]);
    };
    // ****Delete  section ******
    const handleDeleteSection = (indexToDelete: number) => {
        const updatedSections = sections.filter((_, index) => index !== indexToDelete);
        setSections(updatedSections);
    };


    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Skills</legend>

                        {sections.map((section, index) => (
                            <>
                                <div key={index}>

                                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">


                                        {/* Educational Institution */}
                                        <div className="flex w-full" >
                                            <div className="w-full">

                                                <input
                                                    type="text"
                                                    id="skills"
                                                    required
                                                    className="w-[80%] border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div className="flex flex-col float-right mt-6 rounded-full mr-2">



                                                <input type="button" onClick={handleAddSection} value="+" className="bg-blue-700   text-white rounded-lg hover:bg-blue-800 px-6 py-2" />

                                            </div>


                                            {/* Delete Button (if more than one section) */}
                                            {sections.length > 1 && (
                                                <div className="md:col-span-2 text-right mt-6 mr-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteSection(index)}
                                                        className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr className="mt-6 border border-gray-300" />
                                </div>
                            </>

                        ))}

                    </fieldset>

                </form>
            </div>
        </>
    )
}

export default Skills
