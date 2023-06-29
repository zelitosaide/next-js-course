import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Read <Link href="/posts/first-post">this page.</Link>
    </h1>
  );
}