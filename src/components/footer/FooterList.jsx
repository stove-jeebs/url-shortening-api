export default function FooterList({ title, list }) {
  const items = list.map((item) => {
    return (
      <li className="cursor-pointer hover:text-primaryHover" key={item["id"]}>
        {item}
      </li>
    );
  });
  return (
    <div className="flex flex-col text-grayishViolet">
      <h1 className="text-white font-bold mb-4">{title}</h1>
      <ul className="flex flex-col gap-2">{items}</ul>
    </div>
  );
}
