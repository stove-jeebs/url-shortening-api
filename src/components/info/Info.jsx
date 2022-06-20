import Card from "./InfoCards";
import data from "./InfoData";

export default function Info() {
  const cards = data.map((card) => {
    return <Card key={data["key"]} {...card} />;
  });
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
      <div className="container flex justify-center gap-6">{cards}</div>
    </section>
  );
}
