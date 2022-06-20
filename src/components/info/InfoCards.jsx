export default function InfoCards({ icon, title, text }) {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-5 text-grayishViolet text-center md:text-left">
      <div className="rounded-full bg-secondary w-fit">
        <img src={icon} className="" width={100} />
      </div>
      <h1 className="text-2xl text-veryDarkViolet font-bold">{title}</h1>
      <p>{text}</p>
    </div>
  );
}
