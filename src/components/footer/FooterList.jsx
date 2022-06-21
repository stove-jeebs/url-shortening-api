export default function FooterList({ title, list }) {
  const items = list.map((item) => {
    return (
      <li className="cursor-pointer" key={item["id"]}>
        {item}
      </li>
    );
  });
  return (
    <div className="flex flex-col text-gray">
      <h1 className="text-white font-bold my-4">{title}</h1>
      <ul className="flex flex-col gap-2">{items}</ul>
    </div>
  );
}
