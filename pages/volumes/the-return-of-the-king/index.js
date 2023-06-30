import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Content() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  const books = book.books;
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        <li>
          {books[0].ordinal} : {books[0].title}
        </li>

        <li>
          {books[1].ordinal} : {books[1].title}
        </li>
      </ul>
    </div>
  );
}
