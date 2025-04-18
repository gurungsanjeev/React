import InnerNavBar from "../Navbar/InnerNavBar";

import { Steps } from "antd";
import { useState } from "react";

// const description = 'This is a description.';

const Builder = () => {
    const [pagination, setPagination] = useState(0);

    const handleNxt = () => {
        setPagination(pagination + 1);
    };
    const handleBack = () => {
        setPagination(pagination - 1);
    };

    return (
        <>
            <InnerNavBar />

            <div className="w-full min-h-screen bg-amber-100 p-6">
                <Steps
                    current={pagination}
                    items={[
                        {
                            title: "Personal Details",
                        },
                        {
                            title: "Educational Details",
                        },
                        {
                            title: "Work Experiences",
                        },
                        {
                            title: "Work Experiences",
                        },
                        {
                            title: "Work Experiences",
                        },
                        {
                            title: "Work Experiences",
                        },
                    ]}
                />

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
                                        First Name
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
                                        Last Name
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
                                        Address
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
                                        D.O.B
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
                                        Phone Number
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
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                {pagination > 0 ? (
                    <div className="flex justify-center gap-6">
                        <button
                            className="bg-blue-700
                         text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button
                            className="bg-blue-700
                         text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                            onClick={handleNxt}
                        >
                            Next
                        </button>
                    </div>) : (<div className="flex justify-center gap-6">
                        <button
                            className="bg-blue-700
                         text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                            onClick={handleNxt}
                        >
                            Next
                        </button>
                    </div>)


                }
            </div>
        </>
    );
};

export default Builder;
