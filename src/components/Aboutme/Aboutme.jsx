import React from "react";
import "./Aboutme.css";
// import "../Topic/Topic.css";
import bg from "../../assets/bg.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Kojohn from "../Kojohn/Kojohn";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-cover">
        <p className="about-stack">About Me</p>
      </div>
      <Kojohn />
      <div className="container">
        <div id="polina">
          <div className="img">
            <img src={bg} alt="" />
          </div>
          <h1>MR.Voraphat</h1>
          <p>
            <Link>
              <AiFillLinkedin className="icon" />
            </Link>
            <Link>
              <AiFillGithub className="icon" />
            </Link>
            <Link>
              <BiLogoGmail className="icon" />
            </Link>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            porta dictum turpis, eu mollis justo gravida ac. Proin non eros
            blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit
            vehicula, turpis eros sollicitudin lacus, at convallis mauris magna
            non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet
            ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel
            enim at auctor.
          </p>

          <div >
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
                • Database: <span className="tech" >MongoDB</span>
              </p>
              <p>
                • Code Management and Version Control: <span className="tech" >Git</span>
              </p>
              <p>
                • Design: <span className="tech">Figma</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
