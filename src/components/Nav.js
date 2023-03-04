import { useState } from "react";
import Hamburger from "./Hamburger";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/nav.scss";

function Nav(){

    const [isOpen,setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
        console.log('omg i hate everything lemme do drrss')
    }


    return(
        <nav>
        <h1>Portfolio</h1>
        
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <NavLink className="navLink" to="/">Home</NavLink>
        <NavLink className="navLink" to="about">About</NavLink>
        <NavLink className="navLink"to="projects">Projects</NavLink>
        </div>
        
            
        <div className="hamburger" onClick={toggleMenu}>
        <Hamburger></Hamburger>
        </div>
      </nav>
    )
}

export default Nav;