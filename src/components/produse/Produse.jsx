import { useEffect, useState } from "react";
import ProduseList from "../produseList/ProduseList";
import Sidenav from './sidenav/Sidenav';


//import "./produse.scss";
import "./produse.css";

import {
  signaleticaPortfolio,
  trofeePortfolio,
  promotionalePortfolio,
  industrialaPortfolio,
  fotogravuraPortfolio,
} from "../../data";

export default function Produse() {
    const lista=listCategorii

  const [selected, setSelected] = useState('signaletica');
  const [data, setData] = useState([]);
  const listCategorii = [
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
    <div className="produse" id="produse">
    <div className='leftNav'>
<Sidenav />
    </div>
   
<div className='rightProduse'>
   <h2 style={{color:"crimson", fontSize:29}}> Produse  </h2>

<p>Pentru a vedea detalii despre produse puteti alege fie din meniul vertical din stanga, fie din categoriile listate mai jos.
</p>
   

<ul className="ulProduse">
        {listCategorii.map((item) => (
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