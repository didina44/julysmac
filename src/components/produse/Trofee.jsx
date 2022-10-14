import { useEffect, useState } from "react";

import Sidenav from './sidenav/Sidenav';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { imagesSpeciale, imagesTrofeeSticla, imagesTrofeePlexiglas, imagesCupePremium,imagesCupeAccesibile, imagesMedalii, imagesPlachete,imagesFotogravura } from './subcatImagesTrofee';
import { descriereSpeciale, descriereTrofeeSticla, descriereTrofeePlexiglas, descriereCupePremium, descriereCupeAccesibile, descriereMedalii, descrierePlachete, descriereFotogravura } from './subcatDescriere';
import { descriereSignaletica, descriereTrofee, descriereIndustriala, descrierePromotionale } from './catDescriere';
//import "./produse.scss";
import "./produse.css";

export default function Trofee(props) { 
  const [subcategoriiImages, setSubcategoriiImages] = useState([])
  const [subcategoriiDescriere, setSubcategoriiDescriere] = useState([])
  const [categoriiDescriere, setCategoriiDescriere] = useState([])
  const [showCatDescriere, setShowCatDescriere] = useState(false)
  const [showProduseDescriere, setShowProduseDescriere] = useState(false)
  const [showSubSignaletica, setShowSubSignaletica] = useState(false)
  const [showSubTrofee, setShowSubTrofee] = useState(false)
  const [showSubIndustriala, setShowSubIndustriala] = useState(false)
  const [showSubPromotionale, setShowSubPromotionale] = useState(false)

  
   const refreshProduse = useEffect(() => {
    setSubcategoriiImages ([]);
    setSubcategoriiDescriere ([]);
    setCategoriiDescriere ([]);
    setShowCatDescriere (false);
    setShowProduseDescriere (true);
    setShowSubSignaletica (false);
    setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

  }, []);
  
  return (
    <div className="produse" id="produse">
    <div className='leftNav'>
<Sidenav setSubcategoriiImages={setSubcategoriiImages} 
setSubcategoriiDescriere={setSubcategoriiDescriere} 
setCategoriiDescriere={setCategoriiDescriere}
setShowCatDescriere={setShowCatDescriere}
setShowProduseDescriere={setShowProduseDescriere}
setShowSubSignaletica= {setShowSubSignaletica}
setShowSubTrofee= {setShowSubTrofee}
setShowSubIndustriala= {setShowSubIndustriala}
setShowSubPromotionale= {setShowSubPromotionale}
 />

    </div>
   
<div className='rightProduse'>

   <h2> 
   {showProduseDescriere&&"Produse"}
   {categoriiDescriere.titluCat} 
   {subcategoriiDescriere.titluSubcat}   </h2>


<p className='produseParagraph'> {showProduseDescriere&&"Va rugam sa selectati tipul de produs care va intereseaza"} 
{showProduseDescriere&&<span className="desktopOnly"> fie din meniul detaliat din stanga, fie din categoriile principale listate mai jos 
 </span>}
{showProduseDescriere&&<span className="mobileOnly"> din categoriile principale listate mai jos 


</span>}

{showCatDescriere&&categoriiDescriere.descriereCat} {subcategoriiDescriere.descriereSubcat}  </p>

<p className="desktopOnly">{showCatDescriere&&"Va rugam sa selectati o sub-categorie din aceasta categorie de produse"} </p>


{showProduseDescriere&&<p className='produseParagraph'>
<button className="navig" onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereSignaletica); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
            setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

        }}>
Signaletica 
      </button>
      

<button className="navig" onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereTrofee); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

        }}>
Premiere si apreciere 
      </button>

      <button className="navig" onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereIndustriala); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);
        }}>
Gravura industriala 
      </button>

      <button className="navig" onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descrierePromotionale); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);
        }}>
Obiecte promotionale 
      </button>

 </p>}

      {showSubSignaletica&& <p className='produseParagraph'>
<button className="subcategorii" onClick={() =>{setSubcategoriiImages(imagesPlaci); 
        setSubcategoriiDescriere (descrierePlaci);
        sewtCategoriiDescriere (descriereSignaletica);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
     
        }}>
Placi de firma gravate
      </button>
      
      <button className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesAfisaj);
                  setSubcategoriiDescriere (descriereAfisaj);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Sisteme de afisaj</button>


      <button className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesSigle);
                  setSubcategoriiDescriere (descriereSigle);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Sigle decupate</button>


      <button className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesHotel);
                  setSubcategoriiDescriere (descriereHotel);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Signaletica hotel</button>
      

      
      <button className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesPlexiglas);
                  setSubcategoriiDescriere (descrierePlexiglas);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Display-uri plexiglas</button>
      </p>}



<div className="galerieProduse">
<ImageGallery items={ subcategoriiImages }  showFullscreenButton={false}   showPlayButton= {false}
 />
</div>

{!showProduseDescriere&&!showCatDescriere&&
<button className="navig" onClick={() => {  window.scrollTo(0,0);

  setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
}}
>

{!showProduseDescriere&&!showCatDescriere&&"Inapoi la categorie"} </button>}


 {!showProduseDescriere&&
<button className="navig" onClick={() => {
  window.scrollTo(0,0);
  window.location.reload(false);}
}>Inapoi la toate produsele </button>}

   

         
      </div>
    </div>
    
  );
}