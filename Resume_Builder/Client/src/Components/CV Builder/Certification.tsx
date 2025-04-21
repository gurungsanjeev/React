
import { useState } from "react";

const Certification = () => {
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
                        <legend className="text-lg font-semibold px-2">Certification</legend>

                        {sections.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="Name of institution" className="block font-medium mb-1">Name of institution</label>
                                            <input
                                                type="text"
                                                id="name of institution"
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />

                                        </div>

                                        {/* Educational Institution */}
                                        <div>
                                            <label htmlFor="position" className="block font-medium mb-1">Title</label>
                                            <input
                                                type="text"
                                                id="position"
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Year of joined */}
                                        <div>
                                            <label htmlFor="complete Date" className="block font-medium mb-1">Completed Date</label>
                                            <input
                                                type="text"
                                                id="complete Date"
                                                placeholder="15-July"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {/* Year of completed */}
                                        <div>
                                            <label htmlFor="year" className="block font-medium mb-1">Completed Year</label>
                                            <input
                                                type="text"
                                                placeholder="2025"
                                                id="year"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                    </div>
                                    
                                    {/* Delete Button (if more than one section) */}
                                    {sections.length > 1 && (
                                        <div className="md:col-span-2 text-right mt-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteSection(index)}
                                                className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                            >
                                                Delete Section
                                            </button>
                                        </div>
                                    )}
                                    <hr className="mt-6 border border-gray-300" />
                                </div>
                            </>

                        ))}
                        <div className="flex flex-col float-right mt-6 ">



                            <input type="button" onClick={handleAddSection} value="Add another section" className="bg-blue-700 mt-2  text-white rounded-lg hover:bg-blue-800 px-12 py-2" />

                        </div>
                    </fieldset>

<hr className="mt-10"/>
                    {/* ******************************** Achievement****************************** */}

                    <fieldset className="border border-gray-300 rounded  mt-10 p-4">
                        <legend className="text-lg font-semibold px-2">Achievements</legend>

                        {sections.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="Name of institution" className="block font-medium mb-1">Name of institution</label>
                                            <input
                                                type="text"
                                                id="name of institution"
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />

                                        </div>

                                        {/* Educational Institution */}
                                        <div>
                                            <label htmlFor="position" className="block font-medium mb-1">Award Title</label>
                                            <input
                                                type="text"
                                                id="position"
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Year of joined */}
                                        <div>
                                            <label htmlFor="complete Date" className="block font-medium mb-1">Award Date</label>
                                            <input
                                                type="text"
                                                id="complete Date"
                                                placeholder="15-July"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {/* Year of completed */}
                                        <div>
                                            <label htmlFor="year" className="block font-medium mb-1">Award Year</label>
                                            <input
                                                type="text"
                                                placeholder="2025"
                                                id="year"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                    </div>
                                    
                                    {/* Delete Button (if more than one section) */}
                                    {sections.length > 1 && (
                                        <div className="md:col-span-2 text-right mt-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteSection(index)}
                                                className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                            >
                                                Delete Section
                                            </button>
                                        </div>
                                    )}
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

export default Certification
