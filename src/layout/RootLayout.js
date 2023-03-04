import React from "react";
import { NavLink, Outlet } from "react-router-dom";

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
      
    </div>

  );
}

export default RootLayout;
