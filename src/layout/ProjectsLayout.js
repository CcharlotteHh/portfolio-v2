import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProjectsLayout() {
  return (
    <div className="projects-layout">
  <h2> projects layout</h2>
  <nav>
    <NavLink to="faq">Vieuw the FAQ</NavLink>
    <NavLink to="contact"> Contact</NavLink>
  </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default ProjectsLayout;
