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
            explicacao: "O BAFTA Awards é uma premiação anual organizada pela British Academy of Film and Television Arts, que reconhece as melhores contribuições ao cinema e à televisão. Fundada em 1947, a academia busca promover e desenvolver as artes cinematográficas e televisivas no Reino Unido. A premiação é dividida em diversas categorias, incluindo Melhor Filme, Melhor Diretor, Melhor Ator e Atriz, entre outras. A votação é realizada pelos membros da academia, que somam milhares de profissionais da indústria audiovisual (atores, diretores, produtores, técnicos, etc.)",
            imagemTrofeu: "/images/Bafta.png"
        },
        {
            id: 4,
            nome: "Cannes",
            explicacao: "Em 1935, Jean Zay, ministro da Instrução pública e de Belas Artes da França, ao ver a interferência do governo fascista na Mostra de Cinema de Veneza, discursou em favor da criação de uma nova premiação de nível internacional, que não estivesse relacionada com a ideologia do governo italiano da época. Ela premia o melhor filme, melhor ator, melhor atrís, melhor diretor e melhor roteirista. Os vencedores da competição oficial são escolhidos por um júri internacional, sendo eles diretores, atores, produtores e artistas renomados do cinema.",
            imagemTrofeu: "/images/Cannes.png"
        },
        {
            id: 5,
            nome: "Festival de Veneza",
            explicacao: "O Festival de Veneza é o mais antigo festival de cinema do mundo, e um dos mais influentes da indústria, ao lado de Cannes e Berlin. Realizado no final de agosto ou início de setembro na ilha de Lido, na Lagoa de Veneza, as exibições acontecem no histórico Palazzo del Cinema no Lungomare Marconi. As decisões no Festival de Veneza não são feitas por voto aberto e geral. Os vencedores são decididos por júris internacionais fechados e restritos, compostos por um pequeno grupo de personalidades renomadas do cinema global (diretores, atores, roteiristas, críticos e escritores).",
            imagemTrofeu: "/images/veneza.png"
        },
        {
            id: 6,
            nome: "Festival de Berlim",
            explicacao: "O Festival Internacional de Cinema de Berlim foi criado para o público berlinense em 1951, no início da Guerra Fria, como uma vitrine “do mundo livre”. Moldada pelo turbulento período pós-guerra e pela situação única de uma cidade dividida, a Berlinale se desenvolveu em um local de intercâmbio intercultural e uma plataforma para a exploração cinematográfica crítica das questões sociais. Até hoje é considerado o mais político de todos os grandes festivais de cinema. A decisão do prêmio cabe inteiramente ao Júri Internacional, um comitê restrito e altamente especializado composto por cerca de sete a nove profissionais de destaque no cinema mundial, e o grupo é sempre presidido por uma grande personalidade artística (como Wim Wenders na edição de 2026 ou Todd Haynes em 2025) e inclui diretores, roteiristas, produtores, atores e críticos de cinema internacionais.",
            imagemTrofeu: "/images/berlim.png"
        },
        {
            id: 7,
            nome: "Emmy",
            explicacao: "Prêmio Emmy , qualquer uma das premiações anuais concedidas por realizações excepcionais na televisão nos Estados Unidos . O nome Emmy deriva de Immy, um apelido para image orthicon, um tubo de câmera usado na televisão. A estatueta do Prêmio Emmy consiste em uma mulher alada, representando a arte, segurando um elétron , representando a ciência. Os Prémios Emmy são criados pela Academia Nacional de Artes e Ciências da Televisão. Somente membros da academia podem votar nos prêmios, e os membros votam apenas dentro de sua própria área de atuação",
            imagemTrofeu: "/images/emmy.png"
        },
        {
            id: 8,
            nome: "Critics Choice",
            explicacao: "Criado em 1995 pela Critics Choice Association (CCA), a maior entidade de críticos dos Estados Unidos e do Canadá, o Critics' Choice Awards se consolidou como uma das premiações mais influentes da temporada de prêmios, servindo como referência para o Oscar ao destacar possíveis favoritos. Especialmente porque é um dos poucos eventos da safra que é transmitido para o mundo inteiro. Por isso, ser indicado ou vencer um Critics Choice Award, aumenta significativamente a visibilidade e a credibilidade de um filme ou série. Quem vota são Críticos e jornalistas.",
            imagemTrofeu: "/images/CriticsChoice.png"
        },
        {
            id: 9,
            nome: "SAG Awards",
            explicacao: "Considerada uma das premiações mais relevantes da temporada, a cerimônia desempenha um papel fundamental ao aumentar a visibilidade de filmes e artistas que almejam não apenas concorrer, mas principalmente conquistar a estatueta do Oscar. O SAG Awards se destaca por ser a única premiação significativa concedida por atores e para atores, o que amplia sua relevância. Ele também compartilha um número expressivo de votantes com o Oscar. Os membros que votam nas categorias de atuação do Oscar, um grupo composto por mais de 1.000 profissionais da área, incluem membros do Sindicato dos Atores, que também votam no SAG Awards. Embora uma estatueta do SAG Awards frequentemente indique um possível sucesso no Oscar.",
            imagemTrofeu: "/images/SAGAwards.png"
        },
        {
            id: 10,
            nome: "Grande Otelo",
            explicacao: "O Prêmio Grande Otelo do Cinema Brasileiro é organizado e votado pelos próprios profissionais do setor, uma forma da própria classe celebrar o seu trabalho e dar o devido reconhecimento ao talento de seus profissionais. A premiação é anual. Contribui para a elevação e a promoção do cinema brasileiro junto à população e ao público do país, através do reconhecimento da qualidade técnica e artística de seus filmes e da confraternização entre os profissionais da indústria.",
            imagemTrofeu: "/images/GrandeOtelo.png"
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