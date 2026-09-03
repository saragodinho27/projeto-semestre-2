'use client'
import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';
import { useState } from 'react';


export default function Header() {
    return (
            <header className={styles.header}>
                <nav className={styles.cabecario}>
                    <ul className={styles.ulCabecario}>
                        <li className={styles.liElements}><Link href='/'>Home</Link></li>
                        <li className={styles.liElements}><Link href='/generos'>Gêneros</Link></li>
                        <li className={styles.liElements}><Link href='/premiacoes'>Premiações</Link></li>
                        <li className={styles.liElements}><Link href='/profissoes'>Profissões</Link></li>
                    </ul>
                </nav>
            </header>
    )
}