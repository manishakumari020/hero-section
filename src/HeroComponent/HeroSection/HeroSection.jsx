import React from "react";
import { ReactComponent as HeadphoneIcon } from "../../asset/headphone-icon.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h5 className="heading">100 Thousand Songs, ad-free</h5>
          <p className="para">Over thousands podcast episodes</p>
          <HeadphoneIcon className="headphone-icon" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
