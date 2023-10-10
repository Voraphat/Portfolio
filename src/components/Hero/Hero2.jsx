// import React, { useState } from "react";
// import Me from "../../assets/me.jpg";
// import bg from "../../assets/bg.png";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

// import "./Hero.css";
// import Skill from "../Skill/Skill";
// import Contact from "../Contact/Contact";

// function Hero() {
//   const slideData = [
//     {
//       backgroundImage: Me,
//       name: "LUNDEV",
//       description:
//         "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
//     },
//     {
//       backgroundImage: bg,
//       name: "LUNDEV",
//       description:
//         "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
//     },
//     {
//       backgroundImage: Me,
//       name: "LUNDEV",
//       description:
//         "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
//     },
//     {
//       backgroundImage: bg,
//       name: "LUNDEV",
//       description:
//         "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
//     },
//     {
//       backgroundImage: Me,
//       name: "LUNDEV",
//       description:
//         "Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   console.log("currentIndex:", currentIndex);

//   const nextSlide = () => {
//     let slides = document.querySelectorAll(".item");
//     document.getElementById("slide").appendChild(slides[0]);
    
//   };

//   const prevSlide = () => {
//     let slides = document.querySelectorAll(".item");
//     document.getElementById("slide").prepend(slides[slides.length - 1]);
//   };

//   return (
//     <div className="hero">
//       <div className="containerr">
//         <div id="slide" className="slide">
//           {slideData.map((slide, index) => (
//             <div
//               className="item"
//               style={{ backgroundImage: `url(${slide.backgroundImage})` }}
//               key={index}
//             >
//               <div className="content">
//                 <div className="name">{slide.name}</div>
//                 <div className="des">{slide.description}</div>
//                 <button>See more</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="buttons">
//           <BsFillArrowLeftCircleFill id="prev" onClick={nextSlide} />
//           <BsFillArrowRightCircleFill id="next" onClick={prevSlide} />

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
