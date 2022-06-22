import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";
import logo from "../../assets/logo.svg";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mx-12 lg:hidden relative">
      {/* logo and Hamburger */}
      <div className="flex">
        <img src={logo} alt="Shortly-logo" />
        {/* Hamburger */}
        <div
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="flex flex-col gap-1 ml-auto justify-center cursor-pointer"
        >
          <Hamburger />
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && <MobileMenu />}
    </section>
  );
}
