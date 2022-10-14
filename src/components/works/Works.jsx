import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/servicii/logoTechnologie.png",
      title: "Tehnologie de ultima generatie",
      desc:
        "Gravarea laser si mecanica se realizeaza cu instrumente si mecanisme de ultima generatie, de provenienta canadiana",
      img:
        "./assets/servicii/tehnologie.jpg",
    },
    {
      id: "2",
      icon: "./assets/servicii/logoMateriale.png",
      title: "Materiale de cea mai buna calitate",
      desc:
        "Lucram cu materiale de cea mai buna calitate, selectate dintr-o gama diversa, de la placi metalice, la sticla si lemn",
      img:
        "./assets/servicii/materiale.jpg",
    },
    {
      id: "3",
      icon: "./assets/servicii/logoProiectare.png",
      title: "Proiectare riguroasa",
      desc:
        "Inginerii nostri au o experienta indelungata in redactarea si finisarea precisa a detaliilor proiectelor care ni se incredinteaza ",
      img:
        "./assets/servicii/proiectare.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">

    <h1> Servicii </h1>

    


      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img} 
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}