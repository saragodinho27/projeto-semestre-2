import styles from './index.module.css'
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiInstagram, SiX } from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.mainRow}>
                <div className={styles.socials}>
                    <a href="https://x.com/donniesCheetos" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                        <SiX size={20} />
                    </a>
                    <a href="https://www.instagram.com/sara.godinho/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <SiInstagram size={20}/>
                    </a>
                    <a href="mailto:sara.godinho27@gmail.com" aria-label="E-mail">
                        <Mail size={20}/>
                    </a>
                </div>

                <div className={styles.copyright}>
                    <p>© 2026. Todos direitos reservados.</p>
                </div>

                <div className={styles.externalLink}>
                    <Link href="https://wagner.dev.vilhena.ifro.edu.br" target="_blank" rel="noopener noreferrer">
                        Visite: Wagner Ferreira
                    </Link>
                </div>
            </div>

            <div className={styles.logoRow}>
                <Image 
                    src="/images/logoCinema.png" 
                    alt="Logo Projeto Cinema" 
                    width={100} 
                    height={60} 
                    className={styles.logoImage}
                />
            </div>
        </footer>
    );
}