export default function ShortenCard({ originalUrl, shortenedUrl }) {
  return (
    <div className="flex flex-col items-center md:flex-row gap-8 my-8 px-5 py-2 justify-between bg-white">
      <p className="text-veryDarkViolet">{originalUrl}</p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <span className="text-primary mb-4 md:mb-0">{shortenedUrl}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shortenedUrl);
          }}
          type="button"
          className="bg-primary hover:bg-primaryHover rounded-md text-white px-8 py-3 font-bold"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
