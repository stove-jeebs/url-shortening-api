export default function InfoCards({ icon, title, text, position }) {
  return (
    <article
      // remember that tailwind will only include classes that are recognized when it scans your code
      // which means dynamically generated clases (like self-${position}) will not be included unless you add the full utility class name
      className={`relative flex flex-col items-center lg:items-start gap-4 ${position}  ${
        position == "self-center" ? "lg:my-12" : ""
      } bg-white rounded-lg px-6 pb-10 text-grayishViolet text-center lg:text-left`}
    >
      <div className="absolute rounded-full bg-secondary w-fit p-7 -translate-y-16 shadow-lg">
        <img src={icon} />
      </div>
      <h1 className="text-2xl text-veryDarkViolet font-bold mt-14">{title}</h1>
      <p>{text}</p>
    </article>
  );
}
