import "./intro.scss";
import "./intro.css";

import { init } from "ityped";
import { useEffect, useRef } from "react";

import { FaMailBulk } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["productie publicitara", "trofee si premii", "signaletica", "obiecte promotionale"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
                <div className="imgContainer">

<ul className="slideshow">
	<li><span></span></li>
  <li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
  	<li><span></span></li>
	<li><span></span></li>
  	<li><span></span></li>


</ul>





</div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bun venit la </h2>
          <h1>GravoSign</h1>
          <h3>
            Gravura laser si mecanica
            <p> pentru <span style={{color:'crimson'}} ref={textRef}> </span> </p>
          </h3>

          <div className='itemContainer2'>
       <FaPhone className='icon' style={{ color:'crimson'}} />
       <span style={{ marginLeft:5, marginRight:16}} className='contactDetails'> 0723353923 </span>
       <FaMailBulk className='icon' style={{ color:'crimson'}} />
       <span style={{ marginLeft:5}} className='contactDetails'> info@gravosign.ro </span>
       </div>





          <h3 style={{color:"#28344c"}} >De 15 ani acceptam orice provocare!</h3>

          






        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}