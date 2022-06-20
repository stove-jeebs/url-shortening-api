import Card from "./InfoCards";
import brandIcon from "../../assets/icon-brand-recognition.svg";
import recordsIcon from "../../assets/icon-detailed-records.svg";
import customizeIcon from "../../assets/icon-fully-customizable.svg";

export default function Info() {
  const data = {
    brand: {
      icon: { brandIcon },
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    records: {
      icon: { recordsIcon },
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    customize: {
      icon: { customizeIcon },
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  };

  return (
    <section>
      {/* title */}
      <div className="container max-w-xl text-center mb-12">
        <h1 className="text-5xl text-veryDarkViolet font-bold mb-8">
          Advanced Statistics
        </h1>
        <p className="text-grayishViolet text-xl">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      {/* information cards */}
      <div className="container flex justify-center gap-6">
        <Card {...data["brand"]} />
        <Card {...data["records"]} />
        <Card {...data["customize"]} />
      </div>
    </section>
  );
}
