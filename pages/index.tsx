import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>
        Read <Link href="/posts/first-post">this page.</Link>
      </h1>
    </>
  );
}