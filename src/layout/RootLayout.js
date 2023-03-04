import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.scss";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Portfolio</h1>
          <ul className="navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      
    </div>

  );
}

export default RootLayout;
