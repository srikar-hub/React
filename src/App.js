import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Success from "./components/Success.jsx";
import NotFound from "./components/NotFound.jsx";
import Projects from "./components/Projects.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import NewProjects from "./components/NewProjects.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Index from "./hooks/3UseState.jsx";
function App() {
  return (
   <div>
    <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route  path = "/about" element={<About />}  />
    <Route path="/contact" element={<Contact />} />
    <Route path="/success" element={<Success />} />
    <Route path="/projects" element={<Projects/>}>
      <Route  path="featured" element={<FeaturedProjects/>}/>
      <Route  path="new" element={<NewProjects/>}/>
    </Route>
    <Route  path="/users" element={<Users/>}/>
    
    <Route path="/users/:userId" element={<UserDetails />} />

    <Route path="*" element={<NotFound />} />
   </Routes>
    <Index/>
   </div>

  );
}

export default App;
