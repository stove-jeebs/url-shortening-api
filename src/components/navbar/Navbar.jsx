import MobileNav from "./MobileNav";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const List = ({ content }) => {
    return (
      <li className="cursor-pointer h-fit hover:text-secondary ease-in-out duration-100">
        {content}
      </li>
    );
  };

  return (
    <nav className="my-12 font-bold text-gray">
      {/* desktop navigation */}
      <section className="hidden lg:flex container">
        {/* logo and links */}
        <div className="flex flex-1 gap-12 items-center">
          <img src={logo} alt="Shortly-logo" />
          <ul className="flex gap-8 items-center">
            <List content={"Features"} />
            <List content={"Pricing"} />
            <List content={"Resources"} />
          </ul>
        </div>
        {/* buttons */}
        <div>
          <button
            type="button"
            className="font-bold mr-8 hover:text-secondary ease-in-out duration-100"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-primary rounded-full text-white px-8 py-3 font-bold hover:bg-primaryHover ease-in-out duration-100"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* mobile navigation */}
      <MobileNav />
    </nav>
  );
}
