'use client'
import Link from 'next/link';
import Image from "next/image";
import styles from './index.module.css';
import { useState } from 'react';
import { ChevronRight, Film, Trophy, Briefcase, Home } from 'lucide-react';

export default function Header() {
    const [menu, setMenu] = useState('☰');

    const navItems = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Produtos', href: '/produtos', icon: Film },
    ];

    return (
        <header className={styles.header}>
            <button
                className={styles.dropbtn}
                onClick={() => setMenu(menu === '☰' ? '✕' : '☰')}
            >
                {menu}
            </button>

            <nav className={`${styles.cabecario} ${menu === '✕' ? styles.menuAberto : ''}`}>
                <ul className={styles.ulCabecario}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.href}>
                                <Link href={item.href} className={styles.navButton}>
                                    <Icon className={styles.icon} size={25} />
                                    <span>{item.label}</span>
                                    <ChevronRight className={styles.chevron} size={12} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}