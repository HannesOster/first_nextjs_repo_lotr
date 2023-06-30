import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <p>
        <Link href="/volumes/the-fellowship-of-the-ring">
          The fellowship of the ring
        </Link>
      </p>
      <p>
        <Link href="/volumes/the-two-towers">The two towers</Link>
      </p>
      <p>
        <Link href="/volumes/the-return-of-the-king">
          The return of the king
        </Link>
      </p>
    </>
  );
}
