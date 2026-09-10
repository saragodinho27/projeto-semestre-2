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
            nome: "Técnico de som",
            explicacao: "Responsável por captar todos os áudios e diálogos dos atores no set com a maior clareza possível, utilizando microfones e gravadores específicos.",
        },
        {
            id: 13,
            nome: "Maquiador",
            explicacao: "Aplica a maquiagem nos atores, que pode ir desde uma correção simples para a câmera até ferimentos falsos e efeitos especiais de caracterização.",
        },
        {
            id: 14,
            nome: "Cabeleleiro",
            explicacao: "Cuida dos penteados, cortes e perucas dos atores para garantir o visual correto e a continuidade visual ao longo de todas as cenas.",
        },
        {
            id: 15,
            nome: "Continuísta",
            explicacao: " A pessoa que garante que não haja erros de lógica entre os cortes (como um copo que estava cheio em um take e aparece vazio no take seguinte).",
        },
        {
            id: 16,
            nome: "Cenógrafo",
            explicacao: "O profissional que desenha, constrói e decora fisicamente os cenários onde o filme será gravado.",
        },
        {
            id: 17,
            nome: "Eletricista de cinema",
            explicacao: "Instala e opera toda a rede de energia e os pesados equipamentos de iluminação necessários para dar luz às cenas criadas pela fotografia.",
        },
        {
            id: 18,
            nome: "Editor/montador",
            explicacao: "Quem junta os pedaços de vídeo gravados. Ele escolhe as melhores tomadas e as organiza na ordem certa para dar ritmo e sentido à história.",
        },
        {
            id: 19,
            nome: "Designer de som",
            explicacao: "Cria a atmosfera sonora do filme. É quem escolhe ou grava os efeitos sonoros (como passos, explosões ou o vento) para dar realismo às cenas.",
        },
        {
            id: 20,
            nome: "Mixador",
            explicacao: "O técnico que equilibra os volumes de tudo o que ouvimos: junta as vozes dos atores, os efeitos sonoros e a música de forma que nenhum abafe o outro.",
        },
        {
            id: 21,
            nome: "Compositor musical",
            explicacao: "Cria a trilha sonora original do filme, compondo as músicas de fundo que ajudam a ditar a emoção e a tensão de cada cena.",
        },
        {
            id: 22,
            nome: "Artista de efeitos visuais (VFX)",
            explicacao: "Cria ou modifica imagens digitalmente no computador para adicionar elementos que não podiam ser gravados ao vivo (como monstros, naves ou cenários digitais).",
        },
        {
            id: 23,
            nome: "Colorista",
            explicacao: "O profissional que faz o tratamento de cor do filme finalizado, ajustando os tons, contrastes e saturação para dar a identidade visual e o clima desejado à obra.",
        }
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>As Profissões do Cinema</h1>

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