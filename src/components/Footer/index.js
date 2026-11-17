import styles from './index.module.css'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <Image
                    src="/image/coruja3.png"
                    alt="Logo Cacarujos"
                    width={180}
                    height={200}
                    priority
                />
            </div>
            <p className={styles.p}>© 2026 Cacarujas Shop. Todos os direitos reservados.</p>
            <a href='https://wagner.dev.vilhena.ifro.edu.br' className={styles.a}>Wagner Ferreira<p className={styles.p2}></p></a>
        </footer>
    );
}