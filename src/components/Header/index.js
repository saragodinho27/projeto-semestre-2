'use client'
import Link from 'next/link';
import Image from "next/image";
import styles from './index.module.css';
import { ChevronRight, Film, Trophy, Briefcase, Home } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const navItems = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Gêneros', href: '/generos', icon: Film },
        { label: 'Premiações', href: '/premiacoes', icon: Trophy },
        { label: 'Profissões', href: '/profissoes', icon: Briefcase },
        { label: 'Glossário', href: '/glossario', icon: Briefcase }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image 
                        src="/images/logoCinema.png" 
                        alt="Logo Cinema"
                        width={200}
                        height={85}
                        priority
                    />
                </Link>
            </div>

            <nav className={styles.cabecario}>
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