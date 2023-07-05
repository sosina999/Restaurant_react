import React from "react";
import "./Header.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title='chase the newflavour'/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et eaque excepturi magnam temporibus molestias saepe rerum vel, totam vitae blanditiis animi fuga reiciendis pariatur cumque, quae corrupti molestiae dolores?</p>
      <button type="button" className="custom__buttom">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="image header" />
    </div>
  </div>
);

export default Header;
