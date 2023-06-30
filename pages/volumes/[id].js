import { volumes } from "../resources/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VolumeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const book = volumes.find(({ slug }) => slug === id);
  const books = book.books;

  console.log(router);
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
      <Image src={book.cover} alt="cover" width={140} height={230} />
      <Link href="/volumes/the-two-towers">Previous volume</Link>
    </div>
  );
}
