import React, { useContext } from "react";
import "./Footer.scss";
import { MyContext } from "../../Context/Context";
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'

export default function Footer() {
  const { isSummer } = useContext(MyContext);

  return (
    <div className={isSummer?"footer--main-summer":"footer--main-winter"}>
      <div className="footer--left">
        <ul>
          <a href="">About us</a>
           <a href="">Contact us</a>
           <a href="">Tell us your experience</a>
        </ul>
      </div>
      <div className="footer--rigth">
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
}
