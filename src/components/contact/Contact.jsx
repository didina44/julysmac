import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">

        <h2 style={{ color:'crimson' }}>Contact</h2>
        <p>
        Se pare ca v-ati hotarat... </p>
        
        <p>Va multumesc pentru ca sunteti interesat de desertul meu!</p>

        <h2> Datele mele de contact </h2>

        <p>
    <span style={{color:'#28344c', fontWeight:'bold' }}>   Adresa  </span> - Deva </p>

<p> <span style={{color:'#28344c', fontWeight:'bold' }}>Telefon </span>- 0731795373 </p>

<p> <span style={{color:'#28344c', fontWeight:'bold' }}>Email </span> - julycioran@yahoo.com</p>

        <h2> Imi puteti trimite un mesaj direct de aici </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Adresa dvs de email" />
          <textarea placeholder="Mesajul dvs"></textarea>
          <button type="submit">Trimiteti</button>
          {message && <span style={{color:'#28344c', fontWeight:'bold', marginTop:20 }}>Va multumesc, voi raspunde in cel mai scurt timp :)</span>}
        </form>
    </div>
          </div>

  );
}