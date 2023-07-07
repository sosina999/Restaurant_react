import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt=" g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img "/>
        <p className="p__opensans"> our team is dedicated to delivering exceptional culinary delights that leave a lasting impression. Join us on a gastronomic journey that celebrates the art of food and the joy of shared moments.</p>
        <button type="button" className="custom__button"> Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans"> Our story began with a shared love for exceptional cuisine and a dream to create a dining destination unlike any other. Founded by Chef Kevin, Gericht is the culmination of their culinary expertise and unwavering passion.</p>
        <button type="button" className="custom__button"> Know More</button>
      </div>

    </div>


   
  </div>
);

export default AboutUs;
