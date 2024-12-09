import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Correct imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import DonateNow from "./pages/DonateNow"; 
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router> 
      <Navbar /> 
      <div className="main-content"> 
        <Routes> 
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}
          <Route path="/donate-now" element={<DonateNow />} /> {/* Donate Now page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
