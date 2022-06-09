import Card from "./ShortenCard";
import desktopPattern from "../../assets/bg-shorten-desktop.svg";

export default function Shorten() {
  return (
    <div className="container my-20">
      <form
        action="/test"
        className="flex flex-col md:flex-row px-4 md:px-12 py-12 rounded-lg
				bg-secondary bg-contain gap-6 md:gap-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopPattern})` }}
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
      <div>
        <Card />
      </div>
    </div>
  );
}
