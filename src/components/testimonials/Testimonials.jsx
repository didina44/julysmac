import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Andrei Popescu",
      title: "Gurmand rafinat",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Sunt fara cuvinte in fata a ceea ce gateste July....",
    },
    {
      id: 2,
      name: "Alexandra Marinescu",
      title: "O alta gospodina",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Domnule, nu imi ieseau...A trebuit sa apelez la July ",
      featured: true,
    },
    {
      id: 3,
      name: "Mihai Pelici",
      title: "Initial sceptic ",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Credeam ca sunt imun la dulciuri...pana am dat de July's Macarons...",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
    <h1> Despre mine si iubitorii de deserturi </h1>

    <p>
Poveste lunga...Pe scurt, epopeea macarons a inceput ca o distractie, hranita de insistenta copiilor mei pentru acest gen de desert. A continuat ca o pasiune, dupa ce am descoperit gamele de arome, subtilitatea ingredientilor si geometria amestecurilor.
</p>

<p style={{ color: 'crimson' }}>
</p>


     
    
      <p>Printre cei care m-au complimentat au fost si...</p>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}