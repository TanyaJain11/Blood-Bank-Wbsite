import '../Css/Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";

export const Cards = () =>{
      return (
        <section className="neon bd-container">
  {/* <div className="neon__container"> */}
    <div className="neon__card">
    <FontAwesomeIcon icon={faHandHoldingWater} />
      <h1 className="neon__title">Ticket 01</h1>
      {/* <p className="neon__description">Pass tickets, for full access to premium movies and series for one year.</p> */}
      <a href="#" >
        Buy Now 
      </a>
    </div>
  {/* </div> */}
</section>
      );
}