import Button from "./GetStartedButton";
import background from "../assets/bg-boost-desktop.svg";

export default function Outro() {
  return (
    <section
      className="flex flex-col items-center gap-8 bg-cover bg-center bg-secondary py-16 text-center text-white font-bold"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-4xl">Boost your links today</h1>
      <Button />
    </section>
  );
}
