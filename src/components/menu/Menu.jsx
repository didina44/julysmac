import "./menu.scss";
import { Link } from "react-router-dom";
import { HashLink } from '@xzar90/react-router-hash-link';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
    
      <ul>
      
        <li onClick={()=>setMenuOpen(false)}>
          <a><HashLink to= "/#intro" className="menuLinks" style={{textTransform: "capitalize"}} >Acasa</HashLink></a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
<a> <HashLink to= "/#portfolio" className="menuLinks" style={{textTransform: "capitalize"}} >Prezentare si ingrediente</HashLink></a>
        </li>
        
        <li onClick={()=>setMenuOpen(false)}>
<a> <HashLink to= "/#works" className="menuLinks">Preparare</HashLink></a>        </li>
        <li onClick={()=>setMenuOpen(false)}>
<a ><HashLink to= "/#testimonials" className="menuLinks">Despre mine</HashLink></a>
        </li>
         <li onClick={()=>setMenuOpen(false)}>
<a><HashLink to= "/#contact" className="menuLinks">Contact</HashLink></a>
        </li>


      </ul>
    </div>
  );
}