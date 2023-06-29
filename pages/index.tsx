import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m Shu. I’m a software engineer and a translator 
          (English/Portugues). You can contact me on 
          <a target="_blank" href="https://twitter.com/saide_zelito/">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}