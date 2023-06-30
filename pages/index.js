import Link from "next/link";
import { introduction, volumes } from "./resources/lib/data";

export default function HomePage() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link href={`/volumes/${getRandomElement(volumes).slug}`}>
        Random volume
      </Link>
    </div>
  );
}
