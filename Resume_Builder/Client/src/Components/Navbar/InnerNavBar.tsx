

const InnerNavBar = () => {
  return (
    <>
    <nav className="bg-indigo-100 ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">


        {/* ******logo section******* */}
        <div className="logo">

        <h1 className="text-blue-500 text-2xl font-bold"> Resume Builder</h1>
        </div>

        {/* *******Profile section */}
        <div className="profile-section flex items-center gap-2">
            <img src="user.jpg" alt="user" className="h-12 w-12 rounded-full" />
            <p>sanjeev</p>
        </div>
        </div>
    </nav>
    </>
  )
}

export default InnerNavBar
