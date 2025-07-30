import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Navbar/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Home />
          </>
        } />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

