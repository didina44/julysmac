import { useEffect, useState } from "react";

import Sidenav from './sidenav/Sidenav';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { imagesPlaci, imagesAfisaj, imagesSigle, imagesHotel,imagesPlexiglas } from './subcatImages';

import { descrierePlaci, descriereAfisaj, descriereSigle, descriereHotel, descrierePlexiglas } from './subcatDescriere';
import { descriereSignaletica, descriereTrofee, descriereIndustriala, descrierePromotionale } from './catDescriere';
//import "./produse.scss";
import "./produse.css";
import { imagesSpeciale, imagesTrofeeSticla, imagesTrofeePlexiglas, imagesCupePremium,imagesCupeAccesibile, imagesMedalii, imagesPlachete,imagesFotogravura } from './subcatImagesTrofee';
import { imagesTimbru, imagesInox, imagesAluminiu, imagesCnc } from './subcatImagesIndustriala';
import { imagesMetalice, imagesPlastic, imagesBirou, imagesCani,imagesBrelocuri, imagesStickuri, imagesPowerbankuri, imagesMasina,imagesUnelte, imagesVin, imagesJocuri, imagesDiverse } from './subcatImagesPromotionale';

import { descriereSpeciale, descriereTrofeeSticla, descriereTrofeePlexiglas, descriereCupePremium, descriereCupeAccesibile, descriereMedalii, descrierePlachete, descriereFotogravura } from './subcatDescriere';

import { descriereTimbru, descriereInox, descriereAluminiu, descriereCnc } from './subcatDescriere';

import { descriereMetalice, descrierePlastic, descriereBirou, descriereCani,descriereBrelocuri, descriereStickuri, descrierePowerbankuri, descriereMasina,descriereUnelte, descriereVin, descriereJocuri, descriereDiverse } from './subcatDescriere';

export default function TemplateProduse(props) { 
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

{showCatDescriere&&categoriiDescriere.descriereCat} 


{subcategoriiDescriere.descriereSubcat} 

<p className="subdescriere" > {subcategoriiDescriere.subdescriere} </p>

 </p>

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

      {showSubTrofee&& <p className='produseParagraph'>
<button className="subcategoriiBut" onClick={() =>{setSubcategoriiImages(imagesSpeciale); 
        setSubcategoriiDescriere (descriereSpeciale);
        setCategoriiDescriere (descriereTrofee);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
                                 
                                  setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);
     
        }}>
Proiecte speciale
      </button>
      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesTrofeeSticla);
                  setSubcategoriiDescriere (descriereTrofeeSticla);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Trofee sticla</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesTrofeePlexiglas);
                  setSubcategoriiDescriere (descriereTrofeePlexiglas);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Trofee plexiglas</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesCupePremium);
                  setSubcategoriiDescriere (descriereCupePremium);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Cupe sportive premium</button>
      
      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesCupeAccesibile);
                  setSubcategoriiDescriere (descriereCupeAccesibile);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Cupe sportive accesibile</button>

<button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesMedalii);
                  setSubcategoriiDescriere (descriereMedalii);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Medalii sportive</button>

<button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesPlachete);
                  setSubcategoriiDescriere (descrierePlachete);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Plachete gravate</button>


<button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesFotogravura);
                  setSubcategoriiDescriere (descriereFotogravura);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Fotogravura</button>

      </p>}

{showSubSignaletica&& <p className='produseParagraph'>
<button className="subcategoriiBut" onClick={() =>{setSubcategoriiImages(imagesPlaci); 
        setSubcategoriiDescriere (descrierePlaci);
        setCategoriiDescriere (descriereSignaletica);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
     
        }}>
Placi de firma gravate
      </button>
      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesAfisaj);
                  setSubcategoriiDescriere (descriereAfisaj);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Sisteme de afisaj</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesSigle);
                  setSubcategoriiDescriere (descriereSigle);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Sigle decupate</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesHotel);
                  setSubcategoriiDescriere (descriereHotel);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Signaletica hotel</button>
      

      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesPlexiglas);
                  setSubcategoriiDescriere (descrierePlexiglas);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Display-uri plexiglas</button>
      </p>}

{showSubIndustriala&& <p className='produseParagraph'>
<button className="subcategoriiBut" onClick={() =>{setSubcategoriiImages(imagesTimbru); 
        setSubcategoriiDescriere (descriereTimbru);
        setCategoriiDescriere (descriereIndustriala);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
     
        }}>
Placi de timbru
      </button>
      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesInox);
                  setSubcategoriiDescriere (descriereInox);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Gravura inox</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesAluminiu);
                  setSubcategoriiDescriere (descriereAluminiu);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Gravura aluminiu</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesCnc);
                  setSubcategoriiDescriere (descriereCnc);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Decupare CNC</button>
    
      </p>}

{showSubPromotionale&& <p className='produseParagraph'>
<button className="subcategoriiBut" onClick={() =>{setSubcategoriiImages(imagesMetalice); 
        setSubcategoriiDescriere (descriereMetalice);
        setCategoriiDescriere (descrierePromotionale);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
     
        }}>
Pixuri metalice
      </button>
      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesPlastic);
                  setSubcategoriiDescriere (descrierePlastic);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Pixuri din plastic</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesBirou);
                  setSubcategoriiDescriere (descriereBirou);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Accesorii de birou</button>


      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesCani);
                  setSubcategoriiDescriere (descriereCani);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Cani si termosuri</button>
      

      
      <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesBrelocuri);
                  setSubcategoriiDescriere (descriereBrelocuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Brelocuri</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesStickuri);
                  setSubcategoriiDescriere (descriereStickuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Stick-uri USB</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesPowerbankuri);
                  setSubcategoriiDescriere (descrierePowerbankuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Powerbank-uri</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesMasina);
                  setSubcategoriiDescriere (descriereMasina);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);
          }}>
Accesorii masina</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesUnelte);
                  setSubcategoriiDescriere (descriereUnelte);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Unelte</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesVin);
                  setSubcategoriiDescriere (descriereVin);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Accesorii pentru vin</button>

 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesJocuri);
                  setSubcategoriiDescriere (descriereJocuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Jocuri</button>


 <button className="subcategoriiBut" onClick={() =>{
          setSubcategoriiImages(imagesDiverse);
                  setSubcategoriiDescriere (descriereDiverse);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

          }}>
Diverse</button>

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