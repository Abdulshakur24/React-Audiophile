import React from "react";
import Title from "./Title";
import ButtonOrange from "./ButtonOrange";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-contents">
          <Title colored={false} text={"NEW PRODUCT"} />
          <h1>XX99 Mark II Headphone</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOrange text={"SEE PRODUCT"} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
