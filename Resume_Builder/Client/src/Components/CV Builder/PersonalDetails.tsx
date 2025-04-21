
const PersonalDetails = () => {
  return (
    <>
     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20">
                    <form>
                        <fieldset className="border border-gray-300 rounded p-4">
                            <legend className="text-lg font-semibold px-2">
                                Personal Details
                            </legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block font-medium mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="block font-medium mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block font-medium mb-1">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Age */}
                                <div>
                                    <label htmlFor="age" className="block font-medium mb-1">
                                        D.O.B <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block font-medium mb-1">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="example@.com"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                                <div className="grid mt-4">
                                    <label htmlFor="intro" className="block font-medium mb-1">
                                        Career Objective / Summary
                                    </label>
                                    <textarea name="intro" id="intro" className="w-full border-2 border-gray-400 rounded-lg h-40"></textarea>
                                    {/* <input
                                        type="email"
                                        id="intro"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    /> */}
                                </div>
                        </fieldset>
                    </form>
                </div>
    </>
  )
}

export default PersonalDetails
