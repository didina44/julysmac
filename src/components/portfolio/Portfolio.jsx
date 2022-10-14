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
      title: "Signaletica",
    },
    {
      id: "trofee",
      title: "Trofee",
    },
    {
      id: "promotionale",
      title: "Obiecte promotionale",
    },
    {
      id: "industriala",
      title: "Gravura industriala",
    },
    {
      id: "fotogravura",
      title: "Fotogravura",
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
          <p>Va multumim ca ati ales sa vizitati site-ul nostru si sa cunoasteti o parte din echipa si ideile GravoSign!

</p>

<p> 

 <p>   <img className="logoPrezentare" src={ SiglaMare} alt='GravoSign logo...' /> </p>

Nu ne-am dori foarte mult sa scoatem in evidenta de cati ani suntem in aceasta industrie a creativitatii si productiei publicitare - ne-am simti cam in varsta :). 



 Cert e ca am 'imbatranit' cu o multime de clienti - oameni frumosi, si cu o gramada de incercari si lucrari de care ne aducem aminte cu mare drag! Unele din ele chiar refacute si pastrate in showroom-urile noastre la loc de cinste - un fel de Hall of Fame al parcursului nostru! 
 </p>
 
 

      <p>Aveti mai jos cateva din produsele si tipurile noastre de proiecte. Pentru gama completa, va rugam sa vizitati pagina "Produse" din meniul principal </p>
      
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