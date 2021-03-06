import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [showLinks, setShowLInks] = useState(false);
  const toggleNavbar = () => {
    setShowLInks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? "open" : "close"}>
        <Link to="/food-react-site">
          <img src={logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/food-react-site">Home</Link>
          <Link to="/food-react-site/menu">Menu</Link>
          <Link to="/food-react-site/about">About</Link>
          <Link to="food-react-site/contact">Contact</Link>
        </div>
      </div>      
      <div className="rightSide">
        <Link to="/food-react-site">Home</Link>
        <Link to="/food-react-site/menu">Menu</Link>
        <Link to="/food-react-site/about">About</Link>
        <Link to="/food-react-site/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  );
}

export default Navbar
