import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Kojohn = () => {
  const [isPaused, setIsPaused] = useState(false);


  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const ellipsesOrbit1 = document.querySelector(".ellipses__orbit--1");
    const ellipsesOrbit2 = document.querySelector(".ellipses__orbit--2");
    const ellipsesOrbit3 = document.querySelector(".ellipses__orbit--3");

    ellipsesOrbit1.addEventListener("mouseenter", handleMouseEnter);
    ellipsesOrbit1.addEventListener("mouseleave", handleMouseLeave);

    ellipsesOrbit2.addEventListener("mouseenter", handleMouseEnter);
    ellipsesOrbit2.addEventListener("mouseleave", handleMouseLeave);

    ellipsesOrbit3.addEventListener("mouseenter", handleMouseEnter);
    ellipsesOrbit3.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ellipsesOrbit1.removeEventListener("mouseenter", handleMouseEnter);
      ellipsesOrbit1.removeEventListener("mouseleave", handleMouseLeave);

      ellipsesOrbit2.removeEventListener("mouseenter", handleMouseEnter);
      ellipsesOrbit2.removeEventListener("mouseleave", handleMouseLeave);

      ellipsesOrbit3.removeEventListener("mouseenter", handleMouseEnter);
      ellipsesOrbit3.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  return (
    <div>
      <div className="">
        <div
          className={`ellipses-container ${isPaused ? "ellipses__paused" : ""}`}
        >
          <div className="ellipses ellipses__outer--thin ellipses__outer--1">
            <div className=" ellipses ellipses__orbit ellipses__orbit--1">
              <Link to='/slide' className="nav-link ">
                <div className="text">Home</div>
              </Link>
            </div>
          </div>
          <div className="ellipses ellipses__outer--thin ellipses__outer--2">
            <div className="ellipses ellipses__orbit ellipses__orbit--2">
              <Link to='/aboutme' className="nav-link" >
                <div className="text">About me</div>
              </Link>
            </div>
          </div>
          <div className="ellipses ellipses__outer--thin ellipses__outer--3">
            <div className="ellipses ellipses__orbit ellipses__orbit--3">
              <Link to='/contact' className="nav-link">
                <div className="text">Contact</div>
              </Link>
            </div>
          </div>
          <div className="ellipses ellipses__outer--thick"></div>
        </div>
      </div>
    </div>
  );
};

export default Kojohn;
