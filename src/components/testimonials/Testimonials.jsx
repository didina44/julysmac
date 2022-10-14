import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Andrei Popescu",
      title: "Director hotel Park",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Am apreciat profesionalismul si rapiditatea serviciilor GravoSign",
    },
    {
      id: 2,
      name: "Alexandra Marinescu",
      title: "Manager firma",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Am gasit la GravoSign o echipa creativa si riguroasa care mi-a furnizat toate solutiile de care aveam nevoie ",
      featured: true,
    },
    {
      id: 3,
      name: "Mihai Pelici",
      title: "Organizator maraton",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "A fost o placere sa lucrez cu cei de la GravoSign - au materiale excelente, comunica eficient si sunt imaginativi",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
    <h1> Despre noi si clientii nostri </h1>

    <p>

    Inceput ca o afacere de familie in urma cu mai bine de 15 ani, GravoSign are o echipa creativa si experimentata, gata mereu sa raspunda provocarilor dvs. 
</p>

<p style={{ color: 'crimson' }}>
    DE CE sa apelati la GravoSign? Pentru ca avem idei originale, folosim numai materiale de cea mai buna calitate, si ne cunoastem foarte bine meseria!
</p>

<p>Ne dorim sa lasam cat mai multe lucruri pozitive in urma noastra, de aceea le multumim clientilor ca ne ofera oportunitatea de a crea lucruri interesante!

     </p>
    
      <p>De-a lungul timpului, printre multi altii, au apelat la serviciile noastre...</p>
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