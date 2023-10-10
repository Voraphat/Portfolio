import {  useEffect ,useState } from "react";
import "./Project.css";
import img from '../../assets/bg.png'

const Project = () => {
    const [items, setItems] = useState([
        {
          id: 1,
          imageUrl: {img},
          name: 'LUNDEV',
          description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
        },
        {
            id: 2,
            imageUrl: {img},
            name: 'LUNDEV',
            description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
          },
          {
            id: 3,
            imageUrl: {img},
            name: 'LUNDEV',
            description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
          },
      ]);
    
      const handleNextClick = () => {
        const updatedItems = [...items];
        updatedItems.push(updatedItems.shift());
        setItems(updatedItems);
      };
    
      const handlePrevClick = () => {
        const updatedItems = [...items];
        updatedItems.unshift(updatedItems.pop());
        setItems(updatedItems);
      };
    
      return (
        <div className="containerr">
          <div className="swiper-container" id="slide">
            <div className="swiper-wrapper">
              {items.map((item) => (
                <div className="swiper-slide" key={item.id} >
                  <div className="content">
                    <div className="name">{item.name}</div>
                    <div className="des">{item.description}</div>
                    <button>See more</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev" onClick={handlePrevClick}>1</div>
            <div className="swiper-button-next" onClick={handleNextClick}>2</div>
        
          </div>
        </div>
      );
    }
export default Project;
