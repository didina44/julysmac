import "./sidenav.css";
import { Link } from "react-router-dom";
import { imagesPlaci, imagesAfisaj, imagesSigle, imagesHotel, imagesPlexiglas } from '../subcatImages';
import { descrierePlaci, descriereAfisaj, descriereSigle, descriereHotel, descrierePlexiglas } from '../subcatDescriere';
import { descriereSignaletica, descriereTrofee, descriereIndustriala, descrierePromotionale } from '../catDescriere';

import { imagesSpeciale, imagesTrofeeSticla, imagesTrofeePlexiglas, imagesCupePremium,imagesCupeAccesibile, imagesMedalii, imagesPlachete,imagesFotogravura } from '../subcatImagesTrofee';
import { imagesTimbru, imagesInox, imagesAluminiu, imagesCnc } from '../subcatImagesIndustriala';
import { imagesMetalice, imagesPlastic, imagesBirou, imagesCani,imagesBrelocuri, imagesStickuri, imagesPowerbankuri, imagesMasina,imagesUnelte, imagesVin, imagesJocuri, imagesDiverse } from '../subcatImagesPromotionale';

import { descriereSpeciale, descriereTrofeeSticla, descriereTrofeePlexiglas, descriereCupePremium, descriereCupeAccesibile, descriereMedalii, descrierePlachete, descriereFotogravura } from '../subcatDescriere';

import { descriereTimbru, descriereInox, descriereAluminiu, descriereCnc } from '../subcatDescriere';

import { descriereMetalice, descrierePlastic, descriereBirou, descriereCani,descriereBrelocuri, descriereStickuri, descrierePowerbankuri, descriereMasina,descriereUnelte, descriereVin, descriereJocuri, descriereDiverse } from '../subcatDescriere';


export default function Sidenav({setSubcategoriiImages, setSubcategoriiDescriere,setCategoriiDescriere, setShowCatDescriere, setShowProduseDescriere,
setShowSubSignaletica,
setShowSubTrofee,
setShowSubIndustriala,
setShowSubPromotionale,
 }) {

  return (

<div className="side-nav">
    <ul>
      <li className="li-categorii">
      <a className='categorii' style={{marginLeft:39}} onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereSignaletica); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (true);
      setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);
      window.scrollTo(0,0);
        }}>
Signaletica 
      </a>
      </li>
    <ul>
      <div className="dropdownContainer" >
        <li > <a className="subcategorii" onClick={() =>{setSubcategoriiImages(imagesPlaci); 
        setSubcategoriiDescriere (descrierePlaci);
        setCategoriiDescriere (descriereSignaletica);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                    window.scrollTo(0,0);

                    
              setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);
     
        }}>
        
Placi de firma gravate</a> </li>

        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesAfisaj);
                  setSubcategoriiDescriere (descriereAfisaj);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
                    window.scrollTo(0,0);

                    setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>
Sisteme de afisaj</a> </li>


        <li> 
        <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesSigle);
                  setSubcategoriiDescriere (descriereSigle);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
                    window.scrollTo(0,0);

                    setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>
Sigle decupate</a>
        
         </li>
        
        
        <li>  <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesHotel);
                  setSubcategoriiDescriere (descriereHotel);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
                    window.scrollTo(0,0);

                    setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>
Signaletica hotel</a> </li>

         <li>  <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesPlexiglas);
                  setSubcategoriiDescriere (descrierePlexiglas);
                  setCategoriiDescriere (descriereSignaletica);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
                    window.scrollTo(0,0);

                    setShowSubSignaletica (true);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>
Display-uri plexiglas</a> </li>

        </div>

      </ul>
      <li className="li-categorii">
 <a className='categorii' onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereTrofee); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
      setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);
      window.scrollTo(0,0);
        }}>
Premiere si Apreciere 
      </a>      
       </li>
      <div className="dropdownContainer" >
        <li> <a className="subcategorii" onClick={() =>{setSubcategoriiImages(imagesSpeciale); 
        setSubcategoriiDescriere (descriereSpeciale);
        setCategoriiDescriere (descriereTrofee);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);

                                   setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);
     }}>Proiecte speciale</a> </li>

     
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesTrofeeSticla);
                  setSubcategoriiDescriere (descriereTrofeeSticla);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Trofee sticla</a> </li>
          
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesTrofeePlexiglas);
                  setSubcategoriiDescriere (descriereTrofeePlexiglas);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Trofee plexiglas</a> </li>

          
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesCupePremium);
                  setSubcategoriiDescriere (descriereCupePremium);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Cupe sportive premium</a> </li>
          
         <li> <a className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesCupeAccesibile);
                  setSubcategoriiDescriere (descriereCupeAccesibile);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Cupe sportive accesibile</a> </li>
          
         <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesMedalii);
                  setSubcategoriiDescriere (descriereMedalii);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Medalii sportive</a> </li>

          
        <li> <a className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesPlachete);
                  setSubcategoriiDescriere (descrierePlachete);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Plachete gravate</a> </li>
          
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesFotogravura);
                  setSubcategoriiDescriere (descriereFotogravura);
                  setCategoriiDescriere (descriereTrofee);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             setShowSubSignaletica (false);
            setShowSubTrofee (true);
    setShowSubIndustriala (false);
    setShowSubPromotionale (false);

          }}>Fotogravura</a> </li>

        </div>
      <li className="li-categorii">
 <a className='categorii' onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descriereIndustriala); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
      setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);
      window.scrollTo(0,0);


        }}>
Gravura Industriala 
      </a>      
      </li>
      <div className="dropdownContainer" >
        <li> <a className="subcategorii" onClick={() =>{setSubcategoriiImages(imagesTimbru); 
        setSubcategoriiDescriere (descriereTimbru);
        setCategoriiDescriere (descriereIndustriala);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);

                                  setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);
     
        }}>Placi de timbru</a> </li>

        
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesInox);
                  setSubcategoriiDescriere (descriereInox);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);

          }}>Gravura inox</a> </li>
          
        <li> <a className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesAluminiu);
                  setSubcategoriiDescriere (descriereAluminiu);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);

          }}>Gravura aluminiu</a> </li>

          
        <li> <a className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesCnc);
                  setSubcategoriiDescriere (descriereCnc);
                  setCategoriiDescriere (descriereIndustriala);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (true);
    setShowSubPromotionale (false);

          }}>Decupare CNC</a> </li>

        </div>
            <li className="li-categorii">
 <a className='categorii' onClick={() =>{setSubcategoriiImages([]); 
      setSubcategoriiDescriere ([]);
      setCategoriiDescriere (descrierePromotionale); 
      setShowCatDescriere (true);
      setShowProduseDescriere (false);
      setShowSubSignaletica (false);
      setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);
      window.scrollTo(0,0);


        }}>
Obiecte promotionale 
      </a>            
            </li>
            <div className="dropdownContainer" >
        <li> <a className="subcategorii" onClick={() =>{setSubcategoriiImages(imagesMetalice); 
        setSubcategoriiDescriere (descriereMetalice);
        setCategoriiDescriere (descrierePromotionale);
              setShowCatDescriere (false);
              setShowProduseDescriere (false);   
                                  window.scrollTo(0,0);
     
        }}>
 Pixuri metalice</a> </li>

 
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesPlastic);
                  setSubcategoriiDescriere (descrierePlastic);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Pixuri din plastic</a> </li>
          
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesBirou);
                  setSubcategoriiDescriere (descriereBirou);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Accesorii de birou</a> </li>

          
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesCani);
                  setSubcategoriiDescriere (descriereCani);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Cani si termosuri</a> </li>
          
         <li> <a  className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesBrelocuri);
                  setSubcategoriiDescriere (descriereBrelocuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Brelocuri</a> </li>

          
         <li> <a  className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesStickuri);
                  setSubcategoriiDescriere (descriereStickuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Stick-uri USB</a> </li>
          
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesPowerbankuri);
                  setSubcategoriiDescriere (descrierePowerbankuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Powerbank-uri</a> </li>
          
        <li> <a  className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesMasina);
                  setSubcategoriiDescriere (descriereMasina);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Accesorii masina</a> </li>
          
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesUnelte);
                  setSubcategoriiDescriere (descriereUnelte);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Unelte</a> </li>
          
         <li> <a  className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesVin);
                  setSubcategoriiDescriere (descriereVin);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Accesorii pentru vin</a> </li>
          
           <li> <a  className="subcategorii"  onClick={() =>{
          setSubcategoriiImages(imagesJocuri);
                  setSubcategoriiDescriere (descriereJocuri);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Jocuri</a> </li>
          
        <li> <a  className="subcategorii" onClick={() =>{
          setSubcategoriiImages(imagesDiverse);
                  setSubcategoriiDescriere (descriereDiverse);
                  setCategoriiDescriere (descrierePromotionale);
                    setShowCatDescriere (false);
              setShowProduseDescriere (false);
             window.scrollTo(0,0);

             
              setShowSubSignaletica (false);
            setShowSubTrofee (false);
    setShowSubIndustriala (false);
    setShowSubPromotionale (true);

          }}>Diverse</a> </li>

        </div>

    </ul>
  </div>
    
  );
}

