import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "./Main.scss";

const Main = () => {
  const settings = {
    infinite: true,
    speed: 4000, // Transition speed (ms)
    slidesToShow: 1,
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2500, // Time between slides (ms)
  };
  return (
    <div className="slick-carousel-container">
      <Slider {...settings}>
        <div className="menu">
          <div className="box">
            <div className="menu_left">
              <h2>PayOsh Markazi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora laudantium, dolorem tenetur harum dolores dignissimos
                commodi! Nulla, recusandae enim. Ad?
              </p>
              <button>Menuga Otish</button>
            </div>
            <div className="menu_right">
              <img
                src="https://fal.media/files/kangaroo/aHGhvnjaJoTklZVrKP1H1.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="box">
            <div className="menu_left">
              <h2>Yetkaziberishhizmati</h2>
              <p>
                Toshkent boyicha yetkaziberish hizmatimiz tekin agar 40 daqiqa
                ichida mahsulotni yetkazaolmasak keyingi buyurtma uchun 20%
                chegirma beramiz
              </p>
              <button>Menuga Otish</button>
            </div>
            <div className="menu_right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yKjCkx3fWEdmb6CjS9JJaeTiPU46JrINYA&s"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="box">
            <div className="menu_left">
              <h2>Filiallarimiz</h2>
              <p>
              PayOsh filialari chilonzor, yunsobod, qibray tumanlarida mavjud 
              </p>
              <a href="https://www.google.com/maps/@41.3484489,69.3473508,15z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">Xaritadan Korish</a>
            </div>
            <div className="menu_right">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default Main;
