import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faClock} from "@fortawesome/free-solid-svg-icons";
import { faBeerMugEmpty} from "@fortawesome/free-solid-svg-icons";


import img1 from "../images/img1.webp";
import '../App.css';
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";


export const TextSlider = () =>{
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
          {/* <img src="https://reactjs.org/logo-og.png" alt="React Image" /> */}
       <FontAwesomeIcon icon={faBeerMugEmpty} />
          <p>You will get free refreshments after donation&nbsp;</p>
          </div>
          <div>
          {/* <img src={img1} alt="react logo" /> */}
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          <p>It Costs Nothing&nbsp;<a href="#"><span>Give blood and stay healthy,</span> Read Blood Donation
                          Facts</a></p>
          </div>
          <div>
       <FontAwesomeIcon icon={faClock} />
          <p>It Takes Only an Hour&nbsp;<a href="#"><span>Donate blood save lives !</span> Read Blood
                          Donation Facts</a></p>
          </div>
          {/* <div>
          <img src={img3} alt="react logo" />
          </div> */}
        
        </Slider>
      );
}