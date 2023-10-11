import React from "react";
import "./Slide.css";

const Slide = ({ image, name, location, description }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h1 className="text2 name">{name}</h1>
        <h4 className="text2 location">{location}</h4>
        <p className="text2 description">{description}</p>
      </div>
    </div>
  );
};

export default Slide;
