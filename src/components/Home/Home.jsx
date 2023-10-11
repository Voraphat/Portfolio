import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/slide">
        <p>
          welcome to my world <br />
          <span>github.com/voraphat</span>
        </p>
      </Link>
    </div>
  );
};

export default Home;
