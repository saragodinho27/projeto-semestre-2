'use client'
import Link from 'next/link';
import Image from "next/image";
import styles from './index.module.css';
import { useState } from 'react';
import { Home, Store, Mail, Heart, ChevronRight, ShoppingBasket } from 'lucide-react';

export default function Header() {
    const [menu, setMenu] = useState('☰');

    const navItems = [
        { label: 'Início', href: '/', icon: Home },
        { label: 'Loja', href: '/produtos', icon: Store },
        { label: 'Clientes', href: '/sobre', icon: Heart },
        { label: 'Contato', href: '/contato', icon: Mail },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image
                        src="/image/coruja2.png"
                        alt="Logo Cacarujos"
                        width={220}
                        height={65}
                        priority
                    />
                </Link>
            </div>

            <div className={styles.direitaContainer}>
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
                                    <Link 
                                        href={item.href} 
                                        className={styles.navButton}
                                        onClick={() => setMenu('☰')}
                                    >
                                        <Icon className={styles.icon} size={22} />
                                        <span>{item.label}</span>
                                        <ChevronRight className={styles.chevron} size={14} />
                                    </Link>
                                </li>
                            );
                        })}

                        <li className={styles.itemMobile}>
                            <Link 
                                href="/pedidos" 
                                className={styles.navButton}
                                onClick={() => setMenu('☰')}
                            >
                                <ShoppingBasket className={styles.icon} size={22} />
                                <span>Pedidos</span>
                                <ChevronRight className={styles.chevron} size={14} />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link href="/pedidos" className={styles.cestaLink} aria-label="Meus Pedidos">
                    <ShoppingBasket size={28} strokeWidth={2.2} className={styles.cestaIcon} />
                </Link>
            </div>
        </header>
    );
}