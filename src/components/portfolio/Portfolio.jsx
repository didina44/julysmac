import { useEffect, useState } from "react";
import SiglaMare from '../../assets/intro/siglaMare.jpg';

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import "./portfolio.css";

import {
  signaleticaPortfolio,
  trofeePortfolio,
  promotionalePortfolio,
  industrialaPortfolio,
  fotogravuraPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("signaletica");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "signaletica",
      title: "Migdale",
    },
    {
      id: "trofee",
      title: "Albusuri",
    },
    {
      id: "promotionale",
      title: "Aroma si culoare",
    },
    {
      id: "industriala",
      title: "Umplutura",
    },
    {
      id: "fotogravura",
      title: "Ornare",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "signaletica":
        setData(signaleticaPortfolio);
        break;
      case "trofee":
        setData(trofeePortfolio);
        break;
      case "promotionale":
        setData(promotionalePortfolio);
        break;
      case "industriala":
        setData(industrialaPortfolio);
        break;
      case "fotogravura":
        setData(fotogravuraPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
   

   <h2 style={{color:"crimson", fontSize:26}}> Prezentare  
</h2>

<div className='textPrezentare'>
          <p>Macarons sunt cele mai iubite prajituri frantuzesti, recunoscute in intreaga lume. Desi sunt simple din punct de vedere al ingredientelor, nu multi sunt cei care se pot lauda cu macarons perfecti. Succesul prepararii celor mai buni macarons este influentat atat de ingrediente, de aparatura, dar si de priceperea persoanei care le va prepara.

</p>

<p> 

 <p>   <img className="logoPrezentare" src={ SiglaMare} alt='GravoSign logo...' /> </p>

Macarons au o istorie lungă în spate – însă una fără arome și fără culori. Fursecurile pe bază de făină de migdale, ingredientul-cheie, au apărut în Europa în urmă cu multe veacuri – poate chiar încă din secolul al VIII-lea, când arabii au adus pe continent migdalele. 

   </p>

   <p>

Strămoșul lor ar fi, se pare, un fursec simplu, preparat din făină de migdale, albușuri de ou și zahăr, pregătit în mod tradițional în Italia și adus pe meleagurile pariziene de patiserii Caterinei de Medici în 1533, atunci când aceasta s-a căsătorit cu viitorul Henric al II-lea al Franței. Denumirea provine din limba italiană, din același maccherone care a dat și numele macaroanelor (paste cu brânză), însemnând „aluat fin”.
 
 </p>
 
 

      <p>Fursecurile din migdale au pătruns în bucătăriile francezilor, dar au ajuns cunoscute abia în anii Revoluției, când două măicuțe, refugiindu-se la Nancy din pricina tulburărilor politice, au început să vândă aceste deserturi pentru a se întreține. Ele au devenit cunoscute drept les Soeurs Macarons(„surorile Macarons”).  </p>
<p>
In mare, ingredientele sunt...
  </p>
</div>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}