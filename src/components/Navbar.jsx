import React, { useState, useEffect } from "react";

import { ReactComponent as Audiophile } from "../assets/Audiophile.svg";
import { ReactComponent as TrolleyIcon } from "../assets/TrolleyIcon.svg";

function Header() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="box a hide-at-1024px">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="box b">
          <Audiophile className="svg" />
        </div>
        <div className="box desktop">
          <a href="#home">HOME</a>
          <a href="#headphones">HEADPHONES</a>
          <a href="#speaker">SPEAKERS</a>
          <a href="#earphones">EARPHONES</a>
        </div>
        <div className="box c">
          <TrolleyIcon className="svg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
