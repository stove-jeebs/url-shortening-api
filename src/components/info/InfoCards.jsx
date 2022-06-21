export default function InfoCards({ icon, title, text, position }) {
  return (
    <article
      // remember that tailwind will only include classes that are recognized when it scans your code
      // which means dynamically generated clases (like self-${position}) will not be included unless you add the full utility class name
      className={`relative flex flex-col items-center md:items-start gap-4 h-fit ${position}  ${
        position == "self-center" ? "md:my-10" : ""
      } bg-white rounded-lg px-5 pb-8 text-grayishViolet text-center md:text-left`}
    >
      <div className="absolute rounded-full bg-secondary w-fit p-7 -translate-y-16 shadow-lg">
        <img src={icon} />
      </div>
      <h1 className="text-2xl text-veryDarkViolet font-bold mt-14">{title}</h1>
      <p>{text}</p>
    </article>
  );
}
