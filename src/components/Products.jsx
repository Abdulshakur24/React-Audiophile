import React from "react";
import ButtonThree from "./ButtonThree";

function Products() {
  return (
    <div className="products">
      <div className="products-container">
        <div className="products-contents">
          <div className="box headphones">
            <div className="image headphone" />
            <h6>HEADPHONES</h6>
            <ButtonThree className="button" text={"SHOP"} />
          </div>
          <div className="box speakers">
            <div className="image speaker" />
            <h6>SPEAKERS</h6>
            <ButtonThree className="button" text={"SHOP"} />
          </div>
          <div className="box earphones">
            <div className="image earphone" />
            <h6>EARPHONES</h6>
            <ButtonThree className="button" text={"SHOP"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
