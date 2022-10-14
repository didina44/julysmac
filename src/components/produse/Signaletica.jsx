import { useEffect, useState } from "react";
import ProduseList from "../produseList/ProduseList";
import Sidenav from './sidenav/Sidenav';
//import "./produse.scss";
import "./produse.css";

import {
  placiPortfolio,
  afisajPortfolio,
  siglePortfolio,
  hotelPortfolio,
  plexiglasPortfolio,
} from "../../dataSignaletica";

export default function Signaletica() {
  const [selected, setSelected] = useState("afisaj");
  const [data, setData] = useState([]);
  const listSignaletica = [
    {
      id: "placi",
      title: "Placi de firma",
    },
    {
      id: "afisaj",
      title: "Sisteme de afisaj",
    },
    {
      id: "sigle",
      title: "Sigle decupate",
    },
    {
      id: "hotel",
      title: "Signaletica hotel",
    },
     {
      id: "plexiglas",
      title: "Display-uri plexiglas",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "placi":
        setData(placiPortfolio);
        break;
      case "afisaj":
        setData(afisajPortfolio);
        break;
      case "sigle":
        setData(siglePortfolio);
        break;
      case "hotel":
        setData(hotelPortfolio);
        break;
      case "plexiglas":
        setData(plexiglasPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="produse" id="signaletica">
    <div className='leftNav'>
<Sidenav />
    </div>
   
<div className='rightProduse'>
   <h2 style={{color:"crimson", fontSize:29}}> SIgnaletica  </h2>

          <p>GravoSign va ofera solutii de afisare profesioniste prin productia de placi indicatoare pentru firme, institutii, hoteluri sau restaurante. 

</p>

<p> Un semn directional isi indeplineste foarte bine functia daca este realizat din materiale rezistente, are dimensiunea potrivita si grafica optimizata astfel incat sa atraga atentia celor din jur.    </p>

<ul className="ulProduse">
        {listSignaletica.map((item) => (
          <ProduseList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="containerProduse">
        {data.map((d) => (
          <div className="itemProduse">
            <img className="imgProduse"
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
}