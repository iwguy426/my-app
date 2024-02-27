import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
//import Head from "next/head";
import { Links } from "../../components/Links";
import { Head } from "../../components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
             To Vercel
            </a>
          </div>
        </div>
         <Links /> 
      </main>
    </>
  );
}
