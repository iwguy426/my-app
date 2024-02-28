import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
//import Head from "next/head";
import { Links } from "../../components/Links";
import { Head } from "../../components/Head";
import { Headline } from "../../components/Headline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head />
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title="TEST-About Page" page="/test/test" />
        <Links /> 
      </main>
    </>
  );
}
