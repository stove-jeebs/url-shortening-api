import Card from "./shortenCard";
import backgroundPattern from "../../assets/bg-shorten-desktop.svg";

export default function Shorten() {
  return (
    <form
      action="/test"
      className="container flex flex-col md:flex-row px-12 py-12 rounded-lg
				bg-secondary bg-contain gap-5 bg-cover"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <input
        type="text"
        className="rounded-xl px-4 py-3 text-xl placeholder:text-grayishViolet text-veryDarkViolet
					focus:outline-none border-2 border-transparent focus:border-primary flex-1"
        placeholder="Shorten a link here..."
      />
      <button
        type="submit"
        className="bg-primary text-white hover:bg-primaryHover font-bold text-xl rounded-lg
		px-12 py-5"
      >
        Shorten!
      </button>
    </form>
  );
}
