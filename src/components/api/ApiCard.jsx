import React, { useState } from "react";

export default function ApiCard({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className="flex flex-col justify-between py-3 my-8 text-xl bg-white rounded-lg md:items-center md:flex-row gap-4"
    >
      {/* longUrl */}
      <p className="px-6 pb-4 border-b md:pb-0 text-veryDarkViolet border-gray md:border-none">
        {longUrl.length > 45 ? `${longUrl.slice(0, 45)}...` : `${longUrl}`}
      </p>
      <div className="flex flex-col items-start w-full px-6 md:w-fit md:items-center md:flex-row gap-4">
        {/* shortUrl link */}
        <a
          href={shortUrl}
          className="text-primary hover:text-primaryHover"
          target="_blank"
          rel="noreferrer noopener"
        >
          {shortUrl}
        </a>

        {/* copy button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(shortUrl);
            setCopied(true);
          }}
          type="button"
          className={`${
            !copied
              ? "bg-primary hover:bg-primaryHover text-white border-transparent"
              : "bg-white text-primary border-primary hover:text-primaryHover hover:border-primaryHover"
          } border-2 rounded-md px-8 py-3 font-bold w-full md:w-auto`}
        >
          {!copied ? "Copy" : "Copied!"}
        </button>
      </div>
    </div>
  );
}
