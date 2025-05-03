import React from 'react'
import { Outlet } from 'react-router-dom'
import InnerNavBar from './Navbar/InnerNavBar'
import Footer from './Footer'
import NavBar from './Navbar/NavBar'




const Layout = () => {
    return (
        <>
            <div className='w-screen h-screen'>
               
                <InnerNavBar />
               
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default Layout
