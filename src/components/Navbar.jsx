import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ReactComponent as Audiophile } from "../assets/Audiophile.svg";
import { ReactComponent as TrolleyIcon } from "../assets/TrolleyIcon.svg";
import MenuMobile from "./Menu";
import CartMobile from "./Carts";
import Modal from "./modal/Modal";

function Header() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  // menu modal
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", ({ matches }) => {
        !matches ? setMenuModalOpen(true) : setMenuModalOpen(false);
      });
  }, []);
  const handleMenuModal = () => {
    menuModalOpen ? MenuClose() : MenuOpen();
  };
  const MenuClose = () => setMenuModalOpen(false);
  const MenuOpen = () => setMenuModalOpen(true);
  // cart modal

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", ({ matches }) => {
        !matches ? setCartModalOpen(true) : setCartModalOpen(false);
      });
  }, []);
  const handleCartModal = () => {
    cartModalOpen ? cartClose() : cartOpen();
  };
  const cartClose = () => setCartModalOpen(false);
  const cartOpen = () => setCartModalOpen(true);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="box a hide-at-1024px">
          <ul onClick={handleMenuModal}>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {menuModalOpen && (
              <Modal
                children={<MenuMobile />}
                modalOpen={MenuOpen}
                handleClose={MenuClose}
              />
            )}
          </AnimatePresence>
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
          <TrolleyIcon className="svg" onClick={handleCartModal} />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {cartModalOpen && (
              <Modal
                children={<CartMobile />}
                modalOpen={cartOpen}
                handleClose={cartClose}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Header;
