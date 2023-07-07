import React from "react";
import "./Header.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title='chase the newflavour'/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}> At Gericht, we are passionate about creating unforgettable dining experiences. Our menu combines global flavors with locally sourced ingredients, crafted with meticulous attention to detail. Led by Kevin Luo, our team is dedicated to delivering exceptional culinary delights that leave a lasting impression. Join us on a gastronomic journey that celebrates the art of food and the joy of shared moments</p>
      <button type="button" className="custom__buttom">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="image header" />
    </div>
  </div>
);

export default Header;
