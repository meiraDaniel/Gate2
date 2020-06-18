import React, { useContext } from "react";
import "./About.scss";
import { MyContext } from "../../Context/Context";
import Ligia from "../../images/ligia.png";
import daniel from "../../images/daniel.jpeg";

function About() {
  const { isSummer } = useContext(MyContext);

  return (
    <div className={isSummer ? "main--about-summer" : "main--about-winter"}>
      <div className="main-container-center">
        <div className="about--left-ligia">
          <div className="about--top-box">
            <img src={Ligia} alt="Ligia" />
            <h2>Lígia</h2>
          </div>
          <div className="about--bottom-box">
            <div className="about--top-description">
              <a href="https://www.linkedin.com/in/lioliveiraz/"> Linkedin</a>
              <a href="https://github.com/lioliveiraz"> Git Hub</a>
            </div>
            <div className="about--bottom-description">
              <p>
                Passionate with web development and writing code. Fast learner,
                hard worker and team player who is proficient in an array of
                scripting languages and multimedia Web Tools
              </p>
            </div>
          </div>
        </div>

        <div className="about--right-daniel">
          <div className="about--top-box">
            <img src={daniel} alt="Ligia" />
            <h2>Daniel</h2>
          </div>
          <div className="about--bottom-box">
            <div className="about--top-description">
              <a href="https://www.linkedin.com/in/daniel-meira/">Linkedin</a>
              <a href="https://github.com/meiraDaniel">Git Hub</a>
            </div>
            <div className="about--bottom-description">
              <p>
                Graduated in automation and control engineering, with experience
                developing software and artificial intelligence using python and
                library such ad OpenCS, TensorFlow, Keras and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
