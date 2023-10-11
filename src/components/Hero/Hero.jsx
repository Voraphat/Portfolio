import React, { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Project1 from "../../assets/Project/Project1.svg";
import Project2 from "../../assets/Project/Project2.svg";
import Project3 from "../../assets/Project/Project3.svg";

import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import Topic from "../Topic/Topic";

const slideData = [
  {
    backgroundImage: Project1,
    name: "ECOMMERCE",
    description:
      "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
  },
  {
    backgroundImage: Project3,
    name: "Adminpage",
    description:
      "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
  },
  {
    backgroundImage: Project2,
    name: "Colmar",
    description:
      "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
  },
];

function Hero() {
 

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    let slides = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(slides[0]);
  };

  const prevSlide = () => {
    let slides = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(slides[slides.length - 1]);
  };

  return (
    <div className="hero">
      <Topic />
      <Navbar />

      <div className="container">
        <div id="slide" className="slide">
          {slideData.map((slide, index) => (
            <div
              className="item"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              key={index}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <BsFillArrowLeftCircleFill id="prev" onClick={nextSlide} />
          <BsFillArrowRightCircleFill id="next" onClick={prevSlide} />
        </div>
      </div>


        

    </div>
  );
}

export default Hero;
