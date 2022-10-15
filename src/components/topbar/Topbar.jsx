import React from 'react';
import './topbar.scss';
import './topbar.css';
import { Link } from "react-router-dom";
import { HashLink } from '@xzar90/react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

//import EmailIcon from '@mui/icons-material/Email';
//import PersonIcon from '@mui/icons-material/Person'; 
//import { AiOutlineMail } from 'react-icons/fa';
//import { AiOutlinePhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import Sigla from '../../assets/sigla.jpg';


function Topbar ({ menuOpen, setMenuOpen }) {
return (
  <div className={"topbar " + (menuOpen && "active")}>
  <div className='wrapper'>
    <div className='left'>
    <a><HashLink to= "/#intro" className="logo"> <img className="logoSigla" src={ Sigla} alt='Julys logo...' /></HashLink> </a>
       <div className='itemContainer'>
       <FaPhone className='icon' style={{ color:'crimson'}} />
       <span className='contactDetails'> 0731795373 </span>
       <FaMailBulk className='icon' style={{ color:'crimson'}} />
       <span className='contactDetails'> julycioran@yahoo.com </span>
       </div>
        
<div className='desktop'>
       <div className='menuDesktop' style={{marginLeft:5}}> <a><HashLink to= "/#intro" className="menuLinks" style={{textTransform: "capitalize"}} >Acasa</HashLink></a> </div>
       
        <div className='menuDesktop'> <a> <HashLink to= "/#portfolio" className="menuLinks" style={{textTransform: "capitalize"}} >Prezentare si ingrediente </HashLink></a> </div>
                

        <div className='menuDesktop'><a> <HashLink to= "/#works" className="menuLinks">Preparare</HashLink></a></div>
        <div className='menuDesktop'><a ><HashLink to= "/#testimonials" className="menuLinks">Despre mine </HashLink></a> </div>
        <div className='menuDesktop'><a><HashLink to= "/#contact" className="menuLinks">Contact</HashLink></a> </div>

</div>
    </div>
    
    <div className='right1'>
       <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
       <span className='line1'> </span>
       <span className='line2'> </span>
       <span className='line3'> </span>
       </div>
    
    </div>






  </div>
  </div>
)
}

export default Topbar