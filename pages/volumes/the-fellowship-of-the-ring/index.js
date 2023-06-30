import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Content() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}
