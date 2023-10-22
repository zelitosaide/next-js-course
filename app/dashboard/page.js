import Link from "next/link";

export const metadata = {
  title: "ABC",
};

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Link href="/">Back Home</Link>
    </>
  );
}