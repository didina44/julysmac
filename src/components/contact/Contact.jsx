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
        De la fiecare client care ne trece pragul invatam ceva nou si interesant. Cu fiecare lucrare realizata ne perfectionam tehnica si ne dezvoltam creativitatea. </p>
        
        <p>Va multumim pentru ca sunteti sau doriti sa fiti clientul nostru!</p>

        <h2> Datele noastre de contact </h2>

        <p>
    <span style={{color:'#28344c', fontWeight:'bold' }}>   Adresa  </span> - Bucuresti, Sector 6, Bulevardul Timisoara, nr 92 </p>

<p> <span style={{color:'#28344c', fontWeight:'bold' }}>Telefon </span>- 0723.353.923 </p>

<p> <span style={{color:'#28344c', fontWeight:'bold' }}>Email </span> - info@gravosign.ro</p>

        <h2> Ne puteti trimite un mesaj direct de aici </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Adresa dvs de email" />
          <textarea placeholder="Mesajul dvs"></textarea>
          <button type="submit">Trimiteti</button>
          {message && <span style={{color:'#28344c', fontWeight:'bold', marginTop:20 }}>Va multumim, vom raspunde in cel mai scurt timp :)</span>}
        </form>
    </div>
          </div>

  );
}