import React, { useState } from "react";
import "./Slide.css";

import Project1 from "../../assets/Project/Project1.svg";
import Project2 from "../../assets/Project/Project2.svg";
// import Project3 from "../../assets/Project/React.JPG";
import Project3 from '../../assets/Project/React.svg'

import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const slideData = [
  {
    Image: Project1,
    name: "ECOMMERCE",
    Link:"https://github.com/Voraphat/ecommerce"
  },
  {
    Image: Project2,
    name: "Project Colmar",
    Link:"https://github.com/Voraphat/Colmar-codeacademy"
  },
  {
    Image: Project3,
    name: "React-Assessment",
    Link:"https://github.com/Voraphat/React-Assessment"
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideData.length - 1 : currentSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === slideData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (

    <div>
        <Navbar/>
      <section className="topic">
        <div className="cover">
          <p className="stack">My Skill</p>
    </div>
      </section>
      <div className="app">
        <div className="cardList">
          <button className="cardList__btn btn btn--left" onClick={handlePrev}>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fefefe"
                  d="M14 6l1.41 1.41-4.58 4.59 4.58 4.59L14 18l-6-6 6-6z"
                />
              </svg>
            </div>
          </button>

          {slideData.map((slide, index) => (
  <div key={index} onClick={() => window.location.href = slide.Link}>
    <Link to={slide.Link}>
      <div
        key={index}
        className={`card ${
          index === currentSlide
            ? "current--card"
            : index === (currentSlide + 1) % slideData.length
            ? "next--card"
            : "previous--card"
        }`}
      >
        <div className="card__image">
          <img src={slide.Image} alt="" />
        </div>
      </div>
    </Link>
  </div>
))}

          <button className="cardList__btn btn btn--right" onClick={handleNext}>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fefefe"
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="infoList">
          <div className="info__wrapper">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className={`info ${
                  index === currentSlide
                    ? "current--info"
                    : index === (currentSlide + 1) % slideData.length
                    ? "next--info"
                    : "previous--info"
                }`}
              >
                <h1 className="text1 name">{slide.name}</h1>
                <h4 className="text1 location">{slide.description}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="app__bg">
          <div className="app__bg__image current--image">
            <img src={slideData[currentSlide].Image} alt="" />
          </div>
          <div className="app__bg__image next--image">
            <img
              src={slideData[(currentSlide + 1) % slideData.length].Image}
              alt=""
            />
          </div>
          <div className="app__bg__image previous--image">
            <img
              src={
                slideData[
                  (currentSlide + slideData.length - 1) % slideData.length
                ].Image
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
