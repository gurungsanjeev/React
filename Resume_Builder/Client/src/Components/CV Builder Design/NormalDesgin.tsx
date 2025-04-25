const NormalDesign = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans bg-white shadow-md rounded-xl">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-gray-600">Data Engineer</p>
      </header>

      <hr className="my-4" />

      {/* Profile Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
        <p className="text-gray-700">
          A highly motivated data engineer with strong problem-solving skills,
          experience in data pipeline design, and a passion for delivering insights
          through clean and structured data.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold">Nepal IT Company</h3>
            <p className="text-gray-700 italic">Data Engineer</p>
            <p className="text-sm text-gray-500">12.04.2025 - 12.05.2027</p>
            <p className="text-gray-700 mt-2">
              Developed and maintained scalable ETL pipelines, improved data
              accessibility, and collaborated closely with analytics teams to drive
              data-based decision-making.
            </p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Bachelor of Computer Applications</h3>
          <p className="text-gray-700 italic">Tribhuvan University</p>
          <p className="text-sm text-gray-500">2021 - 2025</p>
        </div>
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
  );
};

export default NormalDesign;