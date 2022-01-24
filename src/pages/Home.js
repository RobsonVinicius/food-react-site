import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import BannerImage from "../assets/home-salad.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to="/food-react-site/menu">
          <Button variant="contained">ORDER NOW</Button>      
        </Link>
      </div>
    </div>
  );
}

export default Home;

