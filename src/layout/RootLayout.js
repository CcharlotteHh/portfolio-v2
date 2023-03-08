import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/_footer.scss";

import Nav from "../components/Nav";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
       <Nav></Nav>
        
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
      <a href="https://github.com/CcharlotteHh"><i class="fa-brands fa-github"></i></a>
  </footer>
      
    </div>

  );
}

export default RootLayout;
