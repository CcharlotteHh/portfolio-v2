
import {
  createBrowserRouter,
  Route,
  // NavLink,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Faq from "./pages/projects/Faq";
import Contact from "./pages/projects/Contact";
//layout
import RootLayout from "./layout/RootLayout";
import ProjectsLayout from "./layout/ProjectsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Projects" element={<ProjectsLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
  
    <RouterProvider router={router}/>
  );
}

export default App;
