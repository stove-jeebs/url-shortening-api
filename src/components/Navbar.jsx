import React, { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const DeskList = ({ content }) => {
    return (
      <li className="cursor-pointer hover:text-secondary h-fit">{content}</li>
    );
  };
  const MobList = ({ content }) => {
    return <li className="cursor-pointer">{content}</li>;
  };
  const Hamburger = () => {
    return (
      <span className="inline-block rounded-md w-6 h-1 bg-grayishViolet" />
    );
  };

  return (
    <nav className="my-12 font-bold text-gray">
      {/* desktop navigation */}
      <section className="hidden md:flex container">
        {/* logo and links */}
        <div className="flex flex-1 gap-12">
          <img src={logo} alt="Shortly-logo" />
          <ul className="flex gap-8 items-center">
            <DeskList content={"Features"} />
            <DeskList content={"Pricing"} />
            <DeskList content={"Resources"} />
          </ul>
        </div>
        {/* buttons */}
        <div className="">
          <button type="button" className="font-bold mr-8 hover:text-secondary">
            Login
          </button>
          <button
            type="button"
            className="bg-primary rounded-full text-white px-8 py-3 font-bold hover:bg-primaryHover"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* mobile navigation */}
      <section className="container md:hidden">
        {/* logo and Hamburger */}
        <div className="flex">
          <img src={logo} alt="Shortly-logo" />
          {/* Hamburger */}
          <div
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="flex flex-col gap-1 ml-auto justify-center cursor-pointer"
          >
            <Hamburger />
            <Hamburger />
            <Hamburger />
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          // container panel
          <div className="bg-secondary rounded-xl text-xl my-8 py-10">
            <div className="flex flex-col w-4/5 text-white mx-auto text-center">
              {/* mobile links */}
              <div className="w-full">
                <ul className="flex flex-col gap-4 mb-8">
                  <MobList content={"Features"} />
                  <MobList content={"Pricing"} />
                  <MobList content={"Resources"} />
                </ul>
              </div>

              {/* buttons */}
              <div className="flex flex-col gap-8 border-t border-neutral-500 w-full">
                <button type="button" className="font-bold pt-8">
                  Login
                </button>
                <button
                  type="button"
                  className="font-bold bg-primary rounded-full py-3"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
}
