import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Titulo fodastico</h1>
        <p className={styles.paragrafo}>seila</p>
        <Image src='/repense.png' width={500} height={200} alt="Repense"/>
        <Image src='/quiabo.png' width={300} height={300} alt="Repense"/>
        <Image src='/lucas.png' width={400} height={200} alt="Repense"/>
      </main>
    </div>
  );
}
