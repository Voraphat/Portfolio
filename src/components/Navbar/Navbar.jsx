import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="heading">Parent child vertical list menu</h1>
      <nav class="nav">
        <ul className="list">
          <li>
            <a href="#">Home</a>
            <ul>
              <li>
                <a href="#">Components</a>
                <ul>
                  <li>
                    <a href="#">About me</a>
                    <ul>
                      <li>
                        <a href="#">Personal Summary </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">My Skill</a>
                    <ul>
                      <li>
                        <a href="#">Project 1</a>
                      </li>
                      <li>
                        <a href="#">Project 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                    <ul>
                      <li>
                        <a href="#">Email</a>
                      </li>
                      <li>
                        <a href="#">Linkin</a>
                      </li>
                      <li>
                        <a href="#">GitHub</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
