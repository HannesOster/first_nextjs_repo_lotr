import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Content() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}
