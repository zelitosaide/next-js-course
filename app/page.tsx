import Link from "next/link";

export default function Home() {
  return (
    <>
      <img src="/vercel.svg" className="bg-white" />
      <h1>Hello, Home Page!</h1>
      <Link className="block" href="/blog">Blog</Link>
      <Link className="block" href="/account">Acount</Link>
    </>
  );
}