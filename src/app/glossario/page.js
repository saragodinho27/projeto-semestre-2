'use client'
import styles from './page.module.css';

export default function profissoes() {
    const listaProfissoes = [
        {
            id: 1,
            nome: "Blockbuster",
            explicacao: "Um filme de grande orçamento feito para atrair multidões e gerar recordes de bilheteria nos cinemas.",
        },
        {
            id: 2,
            nome: "Cameo",
            explicacao: "Uma aparição muito curta e especial de uma pessoa famosa ou criador em um filme (como as aparições de Stan Lee nos filmes da Marvel).",
        },
        {
            id: 3,
            nome: "Cliffhanger",
            explicacao: "Um recurso de roteiro que termina uma cena ou filme em um momento de enorme suspense, deixando o público sem saber o desfecho até a próxima parte.",
        },
        {
            id: 4,
            nome: "Plot twist",
            explicacao: "Uma reviravolta chocante e inesperada na história que muda completamente o rumo dos acontecimentos ou a percepção do público sobre os fatos.",
        },
        {
            id: 5,
            nome: "Spin-off",
            explicacao: "Uma nova obra derivada de um filme ou série já existente, focada em um personagem, história ou universo específico da produção original.",
        },
        {
            id: 6,
            nome: "Canon",
            explicacao: "Tudo aquilo que é oficial dentro do universo de uma história e que realmente aconteceu dentro da linha do tempo oficial daquela franquia.",
        },
        {
            id: 7,
            nome: "Franquia",
            explicacao: "Uma série de filmes relacionados que compartilham o mesmo universo e marca (como Star Wars ou Harry Potter), gerando também jogos e produtos.",
        },
        {
            id: 8,
            nome: "Reboot",
            explicacao: "Um recomeço total para uma franquia existente, descartando a história e a continuidade anteriores para criar uma nova versão do zero.",
        },
        {
            id: 9,
            nome: "Remake",
            explicacao: "Uma nova versão de um filme antigo já lançado, refazendo a mesma história básica com novos atores, tecnologia e direcionamento.",
        },
        {
            id: 10,
            nome: "Live-action",
            explicacao: "Filmes realizados com atores reais e cenários físicos, em oposição às produções feitas inteiramente por meio de animação ou desenho.",
        },
        {
            id: 11,
            nome: "Found footage",
            explicacao: "Um subgênero de filme (comum no terror) finge ser uma gravação real 'encontrada', gravada pelos próprios personagens com câmeras caseiras.",
        },
        {
            id: 12,
            nome: "Easter egg",
            explicacao: "Um segredo, piada interna ou referência escondida intencionalmente pelos criadores dentro do filme para que os fãs mais atentos encontrem.",
        },
        {
            id: 13,
            nome: "MacGuffin",
            explicacao: "Um objeto, mistério ou objetivo que serve puramente para fazer a história andar e motivar as ações dos personagens, mesmo que sua natureza exata não importe tanto.",
        },
        {
            id: 14,
            nome: "Montagem",
            explicacao: "O processo técnico de selecionar, cortar e juntar os takes gravados para construir o ritmo, o tempo e o significado visual da narrativa.",
        },
        {
            id: 15,
            nome: "VFX (Efeitos Visuais)",
            explicacao: "Alterações ou criações de imagens feitas digitalmente em computadores após as gravações no set (como criaturas digitais).",
        },
        {
            id: 16,
            nome: "SFX (Efeitos Especiais)",
            explicacao: "Truques físicos e práticos realizados ao vivo durante as gravações no set (como explosões reais, fumaça ou próteses mecânicas).",
        },
        {
            id: 17,
            nome: "ADR (Substituição Automatizada de Diálogo)",
            explicacao: "O processo de dublagem feito pelos próprios atores em estúdio após as gravações para corrigir áudios ruins captados no set.",
        },
        {
            id: 18,
            nome: "Plano geral",
            explicacao: "Um enquadramento aberto que mostra o cenário inteiro ao fundo, situando o espectador no espaço e fazendo o personagem parecer pequeno no ambiente.",
        },
        {
            id: 19,
            nome: "Plano médio",
            explicacao: "Enquadra o ator da cintura para cima, ideal para mostrar a interação física e o diálogo natural entre os personagens.",
        },
        {
            id: 20,
            nome: "Close-up",
            explicacao: "Um corte fechado no rosto do personagem para destacar suas expressões faciais, emoções íntimas e reações diretas.",
        },
        {
            id: 21,
            nome: "Primeiro plano",
            explicacao: "Uma variação do close-up focado muito de perto em um elemento (pode ser o rosto cobrindo a tela toda ou um objeto específico de grande importância).",
        },
        {
            id: 22,
            nome: "Ângulo de câmera",
            explicacao: "A posição e altura de onde a câmera filma o personagem (como filmar de baixo para cima para dar poder, ou de cima para baixo para dar fragilidade).",
        },
        {
            id: 23,
            nome: "Movimento de câmera",
            explicacao: "A ação física da câmera se deslocando no espaço (como o Pan, girando para os lados, ou o Tilt, movendo-se para cima e para baixo).",
        },
        {
            id: 24,
            nome: "Iluminação",
            explicacao: "O uso estratégico de luzes e sombras para criar a atmosfera do filme, direcionar a atenção do público e ressaltar o clima dramático.",
        },
        {
            id: 25,
            nome: "Composição",
            explicacao: "A organização visual e o arranjo de todos os elementos (personagens, objetos, cenários) dentro do quadro da tela.",
        },
        {
            id: 26,
            nome: "Profundidade de campo",
            explicacao: "A distância que determina o que fica nítido e o que fica borrado na imagem, separando o personagem principal do fundo da cena.",
        },
        {
            id: 27,
            nome: "Trilha sonora",
            explicacao: "O conjunto de músicas e temas instrumentais que acompanham o filme para guiar as emoções, gerar tensão ou provocar choro.",
        },
        {
            id: 28,
            nome: "Design de som",
            explicacao: "A criação e manipulação minuciosa de toda a identidade sonora do filme, incluindo ruídos de ambiente, passos e efeitos sonoros realistas.",
        }
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Glossário do mundo do Cinema</h1>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Profissão</th>
                            <th>Explicação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProfissoes.map((premio) => (
                            <tr key={premio.id}>
                                <td className={styles.nomePremio}>{premio.nome}</td>
                                <td className={styles.explicacaoCell}>{premio.explicacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}