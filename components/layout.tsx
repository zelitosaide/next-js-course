import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children, home } : any) {
  const className = styles.container;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}