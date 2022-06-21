import Card from "./InfoCards";
import data from "./InfoData";

export default function Info() {
  const cards = data.map((card) => {
    return <Card key={data["key"]} {...card} />;
  });
  return (
    <section>
      {/* title */}
      <div className="container max-w-xl text-center mb-20">
        <h1 className="text-4xl md:text-5xl text-veryDarkViolet font-bold mb-4">
          Advanced Statistics
        </h1>
        <p className="text-grayishViolet text-xl">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      {/* information cards */}
      <div className="container flex flex-col md:flex-row justify-center gap-20 md:gap-6">
        {cards}
      </div>
    </section>
  );
}
