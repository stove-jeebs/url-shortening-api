export default function ShortenCard({ url, shortUrl }) {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 my-8 px-5 py-2 justify-between text-xl
				bg-white"
    >
      <p className="text-veryDarkViolet">{url}</p>
      <div className="flex flex-col md:flex-row">
        <span className="text-primary mb-4">{shortUrl}</span>
        <button
          type="button"
          className="bg-primary hover:bg-primaryHover rounded-md text-white px-8 py-4"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
