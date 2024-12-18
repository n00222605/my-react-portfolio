import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import RedirectExample from "./pages/RedirectExample";
import ProjectsIndex from "./pages/projects/Index";
import ProjectsShow from "./pages/projects/Show";
 
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/redirect-example"} element={<RedirectExample />} />
 
        <Route path={"/projects"} element={<ProjectsIndex />} />
        <Route path={"/projects/:slug"} element={<ProjectsShow />} />
 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
 
export default App;
 
 