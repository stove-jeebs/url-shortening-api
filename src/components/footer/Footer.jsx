import FooterList from "./FooterList";
import Icons from "./Icons";
import data from "./FooterData";
import logo from "../../assets/logo-white.svg";

export default function Footer() {
  const list = data.map((item) => {
    return <FooterList key={item["id"]} {...item} />;
  });
  return (
    <footer className="bg-veryDarkViolet py-10">
      <div className="container flex items-center md:items-start text-center flex-col md:flex-row gap-8 md:gap-28">
        <div className="flex-1">
          <img src={logo} />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">{list}</div>
        <Icons />
      </div>
    </footer>
  );
}
