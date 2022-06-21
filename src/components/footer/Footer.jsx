import FooterList from "./FooterList";
import data from "./FooterData";
import logo from "../../assets/logo-white.svg";

export default function Footer() {
  const list = data.map((item) => {
    return <FooterList key={item["id"]} {...item} />;
  });
  return (
    <footer className="bg-veryDarkViolet py-20">
      <div className="container flex">
        <div className="flex-1">
          <img src={logo} />
        </div>
        <div className="flex gap-20">{list}</div>
      </div>
    </footer>
  );
}
