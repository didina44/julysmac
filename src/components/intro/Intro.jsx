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
      strings: ["zmeura", "fistic", "lamaie", "caramel", "vanilie", "pepene galben", "ciocolata", "mango", "sampanie"],
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
          <h1>July's Macarons</h1>
          <h3>
            
            <p> Gust si arome de <span style={{color:'seagreen'}} ref={textRef}> </span> </p>
          </h3>

          <div className='itemContainer2'>
       <FaPhone className='icon' style={{ color:'black'}} />
       <span style={{ marginLeft:5, marginRight:16}} className='contactDetails'> 0731795373 </span>
       <FaMailBulk className='icon' style={{ color:'black'}} />
       <span style={{ marginLeft:5}} className='contactDetails'> julycioran@yahoo.com </span>
       </div>





          <h2 style={{color:" black"}} >cel mai rafinat desert, facut de casa si in casa :) </h2>

          






        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}