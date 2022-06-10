import React, { useState } from "react";
export default function ApiCard({ originalUrl, shortenedUrl }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-col items-center rounded-lg md:flex-row gap-8 my-8 px-6 py-3 justify-between bg-white">
      <p className="text-veryDarkViolet text-center">
        {originalUrl.length > 70
          ? `${originalUrl.slice(0, 70)}...`
          : `${originalUrl}`}
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <a
          href={shortenedUrl}
          className="text-primary mb-4 md:mb-0 hover:text-primaryHover"
          target="_blank"
          rel="noreferrer noopener"
        >
          {shortenedUrl}
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shortenedUrl);
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
