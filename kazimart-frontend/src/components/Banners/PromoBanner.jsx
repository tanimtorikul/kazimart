import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PromoBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="max-w-[1400px] mx-auto my-12 slick-slider" {...settings}>
      <div className="px-2">
        <img
          src="https://i.ibb.co/6rCYnSG/Black-and-Yellow-Minimalist-E-Commerce-Store-Burning-Mercado-Shops-Banner.png"
          alt="Slide 1"
          className="w-full h-auto rounded-md "
        />
      </div>
      <div className="px-2">
        <img
          src="https://i.ibb.co/LzVTrjZ/Banner-black-friday-webshop-ecommerce-promotion.png"
          alt="Slide 2"
          className="w-full h-auto rounded-md "
        />
      </div>
      <div className="px-2">
        <img
          src="https://i.ibb.co/LzVTrjZ/Banner-black-friday-webshop-ecommerce-promotion.png"
          alt="Slide 3"
          className="w-full h-auto rounded-md "
        />
      </div>
      <div className="px-2">
        <img
          src="https://i.ibb.co/LzVTrjZ/Banner-black-friday-webshop-ecommerce-promotion.png"
          alt="Slide 4"
          className="w-full h-auto rounded-md "
        />
      </div>
    </Slider>
  );
}

export default PromoBanner;
