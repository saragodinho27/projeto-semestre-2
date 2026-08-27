'use client'
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';


export default function Header() {
    const [menu, setMenu] = useState('/icons/menuFechado.svg');
    return (
            <header className={styles.header}>
                <nav className={styles.cabecario}>
                    <ul className={styles.ulCabecario}>
                        <li className={styles.liElements}><Link href='/'>Home</Link></li>
                        <li className={styles.liElements}><Link href='/contato'>Premiações</Link></li>
                        <li className={styles.liElements}><Link href='/sobre'>Categorias</Link></li>
                        <li className={styles.liElements}><Link href='/sobre'>Categorias</Link></li>
                    </ul>
                </nav>
            </header>
    )
}