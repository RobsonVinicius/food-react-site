import React from "react";
import './App.css';
import Navbar from './components/Navbar';
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
      </Router>
    </div>
  );
}

export default App;
