// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import SampleProjects  from "../pages/Portfolio";
import CreateAccount from "../pages/CreateAccount";
import DedicatedDevelopmentTeam from "../pages/Services/DedicatedDevelopmentTeam";
import UserCentricDesign from "../pages/Services/UserCentricDesign";
import CustomWebSolutions from "../pages/Services/websolution";
import MobileAppDevelopment from "../pages/Services/MobileAppDevelopment";
import ServiceUnavailable from "../pages/Services/ServiceUnavailable"; // Importing the new component

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<SampleProjects  />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/services/dedicated-development-team" element={<DedicatedDevelopmentTeam />} /> 
    <Route path="/services/user-centric-design" element={<UserCentricDesign />} />
    <Route path="/services/custom-web-solutions" element={<CustomWebSolutions />} />
    <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
    <Route path="/services/service-unavailable" element={<ServiceUnavailable />} /> 
    {/* Add more routes as needed */}

  </Routes>
);

export default AppRoutes;
