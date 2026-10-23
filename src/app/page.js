'use client';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Titulo fodastico</h1>
        <p className={styles.paragrafo}>seila</p>
        <Image src='/image/Xicara.jpg' width={500} height={200} alt="Repense"/>
        <Image src='/image/Lucas Neto.jpg' width={300} height={300} alt="Repense"/>
        <Image src='/image/Conrado coquette.jpg' width={400} height={200} alt="Repense"/>
      </main>
    </div>
  );
}