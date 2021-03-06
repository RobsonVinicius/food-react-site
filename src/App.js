import React from "react";
import './App.css';
import './styles/reset.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/food-react-site" element={<Home />} />
          <Route path="/food-react-site/menu" element={<Menu />} />
          <Route path="/food-react-site/about" element={<About />} />
          <Route path="/food-react-site/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
