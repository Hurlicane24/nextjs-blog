import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from "../components/counter";
import GitHub from "../components/GitHub";
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Kellen Hurley welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Counter step={1} buttonColor="blue" />
      <Counter step={2} buttonColor="green"/>

      <GitHub />

      <p>Check out my <Link href="/store">Fake Store</Link></p>

    </div>
  );
}
