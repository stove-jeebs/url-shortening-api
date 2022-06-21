import Card from "./InfoCards";
import data from "./InfoData";

export default function Info() {
  const cards = data.map((card) => {
    return <Card key={data["key"]} {...card} />;
  });
  return (
    <section className="pb-32">
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
      <div className="relative container flex flex-col md:flex-row justify-center gap-24 md:gap-6">
        <div className="absolute bg-primary h-4/5 w-2 left-[49.4%] md:h-2 md:w-4/5 md:top-[50%] md:left-auto" />
        {cards}
      </div>
    </section>
  );
}
