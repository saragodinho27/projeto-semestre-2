'use client'
import styles from './page.module.css';
import Image from 'next/image';

export default function Premiacoes() {
    const listaPremiacoes = [
        {
            id: 1,
            nome: "Oscar",
            explicacao: "O Oscar (The Academy Awards ou The Oscars) é a mais famosa premiação de cinema que existe no mundo. Criado em 1927, teve sua primeira cerimônia em 1929, na cidade de Los Angeles. Essa é a premiação de cinema mais antiga em vigor, e sua função é premiar as melhores produções cinematográficas. Os filmes selecionados para concorrer e a escolha dos vencedores do Oscar são determinados pelos membros da Academia, isto é, os membros da Ampas. Na primeira cerimônia, as escolhas foram feitas pelos 26 membros da Academia. Atualmente, acredita-se que o número de membros com direito ao voto seja de 9500 pessoas. No entanto, o número de membros da Academia é de cerca de 10.500 pessoas.",
            imagemTrofeu: "/images/oscar.png"
        },
        {
            id: 2,
            nome: "Globo de Ouro",
            explicacao: "É a segunda premiação mais importante de Hollywood, criada para reconhecer os melhores profissionais e produções do cinema e da televisão, tanto nos Estados Unidos quanto no exterior. Diferente do Oscar, o Globo de Ouro é decidido por jornalistas e críticos de entretenimento de dezenas de países ao redor do mundo.",
            imagemTrofeu: "/images/globoDeOuro.png"
        },
        {
            id: 3,
            nome: "BAFTA",
            explicacao: "Considerado o 'Oscar britânico', celebra as melhores contribuições britânicas e internacionais para o cinema.",
            imagemTrofeu: "/images/trofeus/bafta.png"
        },
        {
            id: 4,
            nome: "Cannes",
            explicacao: "Um dos festivais de cinema mais importantes do mundo, realizado na França, com foco no cinema autoral e independente.",
            imagemTrofeu: "/images/trofeus/cannes.png"
        },
        {
            id: 5,
            nome: "Festival de Veneza",
            explicacao: "O festival de cinema mais antigo do mundo, realizado na Itália, conhecido por lançar grandes produções artísticas.",
            imagemTrofeu: "/images/trofeus/veneza.png"
        },
        {
            id: 6,
            nome: "Festival de Berlim",
            explicacao: "Festival de cinema internacional realizado na Alemanha, famoso por seu foco em causas políticas e sociais.",
            imagemTrofeu: "/images/trofeus/berlim.png"
        },
        {
            id: 7,
            nome: "Emmy",
            explicacao: "O maior prêmio voltado exclusivamente para produções e profissionais da televisão e do streaming.",
            imagemTrofeu: "/images/trofeus/emmy.png"
        },
        {
            id: 8,
            nome: "Critics Choice",
            explicacao: "Premiação concedida pela associação de críticos de cinema dos Estados Unidos e Canadá, servindo de termômetro para o Oscar.",
            imagemTrofeu: "/images/trofeus/critics.png"
        },
        {
            id: 9,
            nome: "SAG Awards",
            explicacao: "Premiação realizada pelo sindicato dos atores de Hollywood (SAG-AFTRA), elegendo as melhores atuações do ano.",
            imagemTrofeu: "/images/trofeus/sag.png"
        },
        {
            id: 10,
            nome: "Grande Otelo",
            explicacao: "A principal premiação do cinema nacional brasileiro, organizada pela Academia Brasileira de Cinema.",
            imagemTrofeu: "/images/trofeus/grande_otelo.png"
        }
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Principais Premiações do Cinema</h1>
            <p className={styles.subtitle}>Conheça os prêmios mais cobiçados da indústria audiovisual e o que cada um representa.</p>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Premiação</th>
                            <th>Explicação</th>
                            <th className={styles.thCenter}>Troféu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaPremiacoes.map((premio) => (
                            <tr key={premio.id}>
                                <td className={styles.nomePremio}>{premio.nome}</td>
                                <td className={styles.explicacaoCell}>{premio.explicacao}</td>
                                <td className={styles.trofeuCell}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={premio.imagemTrofeu}
                                            alt={`Troféu ${premio.nome}`}
                                            width={60}
                                            height={60}
                                            className={styles.trofeuImage}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}