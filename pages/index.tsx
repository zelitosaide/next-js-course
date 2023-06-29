import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Read <Link href="/posts/first-post">this page.</Link>
      </h1>
    </div>
  );
}