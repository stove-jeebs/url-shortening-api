import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

export default function Icons() {
  const iconList = [facebook, twitter, pinterest, instagram];
  const renderIcons = iconList.map((icon, index) => {
    return (
      <div
        key={index}
        className="bg-white hover:bg-primary ease-in-out duration-100 w-8 h-8 cursor-pointer"
        style={{
          WebkitMask: `url(${icon}) no-repeat center`,
          mask: `url(${icon}) no-repeat center`,
        }}
      />
    );
  });
  return <div className="flex gap-5">{renderIcons}</div>;
}
