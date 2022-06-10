import React, { useState, useEffect } from "react";
import Card from "./ApiCard";
import desktopPattern from "../../assets/bg-shorten-desktop.svg";

export default function Api() {
  // states
  const [longUrl, setLongUrl] = useState("");
  const [text, setText] = useState("");
  const [urlLIst, setUrlList] = useState([]);

  // fetch api data
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
          group_guid: `${process.env.REACT_APP_BITLY_GROUP_GUID}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUrlList((prevList) =>
            prevList.concat([[data.id, data.long_url, data.link]])
          );
        });
  }, [longUrl]);

  // sets text input to lonUrl
  function onSubmit(e) {
    e.preventDefault();
    setLongUrl(text);
  }

  // Api cards
  const cards = urlLIst.map((links) => (
    <Card key={links[0]} longUrl={links[1]} shortUrl={links[2]} />
  ));

  return (
    <div className="container my-40 -translate-y-20">
      <form
        onSubmit={onSubmit}
        action="/test"
        className="flex flex-col md:flex-row px-4 md:px-12 py-12 rounded-lg
					bg-secondary bg-contain gap-6 md:gap-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopPattern})` }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="rounded-xl px-4 py-3 text-xl placeholder:text-grayishViolet text-veryDarkViolet
						focus:outline-none border-4 border-transparent focus:border-primary flex-1"
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
      {cards}
    </div>
  );
}
