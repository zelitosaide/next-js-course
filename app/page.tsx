import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Home Page!</h1>
      <Link className="block" href="/dashboard">Dashboard</Link>
      <Link className="block" href="/blog">Blog</Link>
    </>
  );
}
