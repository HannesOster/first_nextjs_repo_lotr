import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Content() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        <li>
          {book.books[0].ordinal} : {book.books[0].title}
        </li>

        <li>
          {book.books[1].ordinal} : {book.books[1].title}
        </li>
      </ul>
      <Image src="/the-two-towers.png" alt="cover" width={140} height={230} />
    </div>
  );
}
