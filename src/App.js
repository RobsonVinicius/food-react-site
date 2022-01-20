import React from "react";
import './App.css';
import './styles/reset.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/food-react-site" element={<Home />} />
          <Route path="/food-react-site/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
