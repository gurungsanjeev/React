import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <>
            <nav className={`flex bg-${props.mod} text-${props.mod==="light"?"dark":"light"}`}>

                <div className="logo "><NavLink  to="" ><h1 className='font-semibold'>Sanjeev</h1> </NavLink></div>
                <ul>
                    <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="">Home</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="about">About</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="contact">Contact</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="projects">Projects</NavLink></li>
                    <li ><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="Blogs">Blogs</NavLink></li>
                    <div class="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.togglemod} role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mod==="dark"?"light":"dark"}` } htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </ul>
            </nav>
            
        </>
    )
}

export default Navbar