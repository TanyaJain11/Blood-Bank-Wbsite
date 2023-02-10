import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/img1.webp";
import '../App.css';
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";


export const SimpleSlider = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <Slider {...settings}>
          <div>
          <img src="https://reactjs.org/logo-og.png" alt="React Image" />
          </div>
          <div>
          <img src={img1} alt="react logo" />
          </div>
          <div>
          <img src={img2} alt="react logo" />
          </div>
          <div>
          <img src={img3} alt="react logo" />
          </div>
        
        </Slider>
      );
}