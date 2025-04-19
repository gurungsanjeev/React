

const Experiences = () => {
  return (
    <>
    
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <form action="">

                        <fieldset className="border border-gray-300 rounded p-4">
                            <legend className="text-lg font-semibold px-2">Work Experiences</legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block font-medium mb-1">Educations</label>
                                    <select name="" id="">
                                        <option value="">Secondary</option>
                                        <option value="">Higher</option>
                                        <option value="">Undergraduate</option>
                                        <option value="">Postgraduate</option>
                                        <option value="">Phd</option>
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
                                        type="text"
                                        id="address"
                                        required
                                        placeholder="YYYY/MM/DD"
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




                            </div>
                        </fieldset>

                    </form>
                </div>
    </>
  )
}

export default Experiences
