import React from "react";
import "./Aboutme.css";
// import "../Topic/Topic.css";
import bg from "../../assets/bg.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout/Layout";
import About from '../Abouttopic/Abouttopic'
import '../Topic/Topic.css'


const AboutMe = () => {
  return (

      <div className="about">
        <About/>
        <div className="containerr">
          <div className="image">
            <img src={bg} alt="" />
          </div>

          <div id="polina">
            <div className="text-about">
              <h1>MR.Voraphat</h1>
              <p>
                <Link to='www.linkedin.com/in/voraphat'>
                  <AiFillLinkedin className="icon" />
                </Link>
                <Link to='https://github.com/Voraphat'>
                  <AiFillGithub className="icon" />
                </Link>
              </p>
              <p>
              I graduated from King Mongkut's Institute of Technology Ladkrabang and then went on to attend Generation Junior Software Developer Bootcamp, which concentrated on software development. I believe in hard effort, dedication, and continuous learning, and I strive to continually develop my skills and attain my goals.
              </p>
              <div>
                <p>
                  • Programming Languages: <span className="tech">C++</span>
                  <p>
                    • Web and Technologies:
                    <span className="tech">
                      HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Node,
                      Express
                    </span>
                  </p>
                  <p>
                    • Database: <span className="tech">MongoDB</span>
                  </p>
                  <p>
                    • Code Management and Version Control:{" "}
                    <span className="tech">Git</span>
                  </p>
                  <p>
                    • Design: <span className="tech">Figma</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default AboutMe;
