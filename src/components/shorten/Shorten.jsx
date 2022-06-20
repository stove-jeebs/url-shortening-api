import React, { useState, useEffect } from "react";
import Card from "./ShortenCard";
import desktopPattern from "../../assets/bg-shorten-desktop.svg";

export default function Shorten() {
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    longUrl &&
      fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `${process.env.REACT_APP_BITLY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: `${longUrl}`,
          domain: "bit.ly",
          group_guid: "Bm679IhA92K",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setShortUrl(data.link);
        });
  });

  function onSubmit(e) {
    e.preventDefault();
    setLongUrl(text);
  }

  return (
    <div className="container my-20">
      <form
        onSubmit={onSubmit}
        action="/test"
        className="flex flex-col md:flex-row px-4 md:px-12 py-12 rounded-lg
				bg-secondary gap-6 md:gap-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopPattern})` }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
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
      {shortUrl && (
        <div>
          <Card originalUrl={longUrl} shortenedUrl={shortUrl} />
        </div>
      )}
    </div>
  );
}
