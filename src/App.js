import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/About";
import ServicesPage from "./Pages/Service";
import ProjectsPage from "./Pages/Project";
import ContactPage from "./Pages/Contact";
import CareerPage from "./Pages/Career";
import Home from "./Pages/Home";

// Example placeholder for home/404

const NotFound = () => <div className="p-8">404 - Page Not Found</div>;

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
