import React, { useState, useEffect } from "react";
import Card from "./ApiCard";
import desktopPattern from "../../assets/bg-shorten-desktop.svg";

export default function Api() {
  // states
  const [longUrl, setLongUrl] = useState("");
  const [text, setText] = useState("");
  const [urlLIst, setUrlList] = useState([]);
  const [isValid, setIsValid] = useState(true);

  // fetch api data
  useEffect(() => {
    longUrl &&
      (isValidHttpUrl(longUrl)
        ? fetch("https://api-ssl.bitly.com/v4/shorten", {
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
              setUrlList((prevList) => {
                if (urlLIst.length > 3) {
                  return prevList
                    .slice(1)
                    .concat([[data.id, data.long_url, data.link]]);
                } else
                  return prevList.concat([[data.id, data.long_url, data.link]]);
              });
            })
        : setIsValid(false));
  }, [longUrl]);

  // sets text input to lonUrl
  function onSubmit(e) {
    e.preventDefault();
    setLongUrl(text);
  }

  function isValidHttpUrl(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  // Api cards
  const cards = urlLIst.map((link) => (
    <Card key={link[0]} longUrl={link[1]} shortUrl={link[2]} />
  ));

  return (
    <div className="container my-40 -translate-y-20">
      <form
        onSubmit={onSubmit}
        action="/#"
        className={`${
          !isValid &&
          "after:content-['Please_add_a_valid_link'] after:text-warning after:italic after:absolute"
        } px-4 md:px-12 py-12 rounded-lg
					bg-secondary bg-contain bg-cover bg-center`}
        style={{ backgroundImage: `url(${desktopPattern})` }}
      >
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-4">
          {/* link input field */}
          <input
            onChange={(e) => {
              setText(e.target.value);
              setIsValid(true);
            }}
            type="text"
            className={`${
              isValid
                ? "border-transparent text-veryDarkViolet focus:border-primary"
                : "border-warning text-warning focus:border-warning"
            } rounded-xl px-4 py-3 text-xl placeholder:text-grayishViolet
						focus:outline-none border-[3px] flex-1`}
            placeholder="Shorten a link here..."
          />
          {/* submit button */}
          <button
            type="submit"
            className="bg-primary text-white hover:bg-primaryHover font-bold text-xl rounded-lg
						px-12 py-5"
          >
            Shorten!
          </button>
        </div>
      </form>

      {/* Api cards */}
      {cards}
    </div>
  );
}
