import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "A",
      title: "X",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", //random
      icon: "assets/twitter.png",
      desc:
        "Desc1",
    },
    {
      id: 2,
      name: "B",
      title: "Y",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", //random
      icon: "assets/youtube.png",
      desc:
        "Desc2",
      featured: true,
    },
    {
      id: 3,
      name: "C",
      title: "Z",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", //random
      icon: "assets/linkedin.png",
      desc:
        "Desc3",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
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
