import { volumes } from "../../resources/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Content() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
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
      <Image
        src="/the-fellowship-of-the-ring.png"
        alt="cover"
        width={140}
        height={230}
      />
      <Link href="/volumes/the-two-towers">Next volume</Link>
    </div>
  );
}
