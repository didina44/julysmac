import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/servicii/migdale.jpeg",
      title: "Mixare si macaronare",
      desc:
        "Albusurile se mixeaza cu zahar si cu  făină de migdale",
      img:
        "./assets/servicii/mix.jpg",
    },
    {
      id: "2",
      icon: "./assets/servicii/albusuri.jpg",
      title: "Formare si coacere",
      desc:
        "Amestecul se toarna in forme si e copt la cuptor",
      img:
        "./assets/servicii/oven.jpeg",
    },
    {
      id: "3",
      icon: "./assets/servicii/lemon.jpg",
      title: "Montare crema",
      desc:
        "Se monteaza umplutura",
      img:
        "./assets/servicii/fill.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">

    <h1>  </h1>

    


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