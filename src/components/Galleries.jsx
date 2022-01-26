import React from "react";
import ButtonBlack from "./ButtonBlack";
import ButtonTransparent from "./ButtonTransparent";

function Galleries() {
  return (
    <div className="galleries">
      <div className="galleries-container">
        <div className="galleries-contents">
          <div className="row-one">
            <div className="speaker" />
            <div className="details">
              <h2>ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonBlack className={"button"} text={"SEE PRODUCT"} />
            </div>
          </div>
          <div className="row-two">
            <div className="wrapper">
              <h2>ZX7 SPEAKER</h2>
              <ButtonTransparent text={"SEE PRODUCT"} />
            </div>
          </div>
          <div className="row-three">
            <div className="image" />
            <div className="details">
              <div className="wrapper">
                <h2>YX1 EARPHONES</h2>
                <ButtonTransparent text={"SEE PRODUCT"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galleries;
