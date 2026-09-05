'use client'
import Image from "next/image";
import Image from "next/link";
import styles from "./page.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
    // Dados para o carrossel principal
    const mainFeatured = [
        {
            id: 1,
            title: "Conheça ator que interpretará Dobby na nova série de Harry Potter",
            subtitle: "Novato tem apenas 17 anos e fez Enola Holmes 2 na Netflix",
            image: "/images/wesleys", // Crie ou adicione sua imagem na pasta public/images/
        },
        // Adicione mais itens para o carrossel aqui
    ];

    // Dados dos cards inferiores
    const secondaryNews = [
        {
            id: 1,
            title: "Foram necessários 25 anos para que compreendessem essa cena de A Pedra Filosofal",
            image: "/images/harry-scene.jpg",
        },
        {
            id: 2,
            title: "Fãs de Dragon Ball estão enfurecidos após divulgação de trailer e data do novo anime",
            image: "/images/vegeta.jpg",
        },
        {
            id: 3,
            title: "Esta atriz participou de filme da Marvel antes de parceria com Alan Ritchson em Reacher",
            image: "/images/reacher.jpg",
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
            <h1 className={styles.sectionTitle}>Séries</h1>

            {/* Banner Principal / Carrossel */}
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

                {/* Seta Esquerda */}
                <button className={`${styles.arrowBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </button>

                {/* Seta Direita */}
                <button className={`${styles.arrowBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Próximo">
                    <ChevronRight size={24} />
                </button>

                {/* Textos sobre o Banner */}
                <div className={styles.bannerContent}>
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.subtitle}</p>

                    {/* Indicadores do Carrossel (Bolinhas) */}
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

            {/* Grid de Cards Inferiores */}
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