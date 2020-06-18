import React, { useContext } from "react";
import "./Footer.scss";
import { MyContext } from "../../Context/Context";
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import {Link} from "react-router-dom";

export default function Footer() {
  const { isSummer } = useContext(MyContext);

  return (
    <div className={isSummer?"footer--main-summer":"footer--main-winter"}>
      <div className="footer--left">
        <ul>
          <Link to="/about" className="footer_link" href="">About us</Link>
           <Link to="/contact"  className="footer_link" href="">Contact us</Link>
           <Link to="/contact"  className="footer_link" href="">Tell us your experience</Link>
        </ul>
      </div>
      <div className="footer--rigth">
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
}
