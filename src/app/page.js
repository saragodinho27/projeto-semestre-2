'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
    const mainFeatured = [
        {
            id: 1,
            title: "Conheça os atores que interpretaram a família Weasleys na nova série de Harry Potter",
            subtitle: "Uma adaptação da saga de J.K. Rowling",
            image: "/images/wealeys.jpg",
        },
        {
            id: 2,
            title: "Vem ai o novo filme de Senhor dos anéis",
            subtitle: "A caçada de Gollum",
            image: "/images/gollum.jpg"
        }
    ];

    const secondaryNews = [
        {
            id: 1,
            title: "Foram necessários 25 anos para que compreendessem essa cena de A Pedra Filosofal",
            image: "/images/harryPotterBanner.jpg",
        },
        {
            id: 2,
            title: "Fãs de Dragon Ball estão enfurecidos após divulgação de trailer e data do novo anime",
            image: "/images/dragonBall.webp",
        },
        {
            id: 3,
            title: "Homem-Aranha lidera em bilheteria nos EUA e Odisseia é Top 1 global",
            image: "/images/bilheteria.jpg",
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? mainFeatured.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === mainFeatured.length - 1 ? 0 : prev + 1));
    };

    const currentSlide = mainFeatured[currentIndex];

    return (
        <main className={styles.container}>
            <h1 className={styles.sectionTitle}>Notícias!</h1>

            <section className={styles.heroBanner}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>

                <button className={`${styles.arrowBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </button>

                <button className={`${styles.arrowBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Próximo">
                    <ChevronRight size={24} />
                </button>

                <div className={styles.bannerContent}>
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.subtitle}</p>

                    <div className={styles.dotsContainer}>
                        {mainFeatured.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.newsGrid}>
                {secondaryNews.map((news) => (
                    <article key={news.id} className={styles.card}>
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className={styles.cardImage}
                            />
                            <div className={styles.overlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{news.title}</h3>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}