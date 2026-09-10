'use client'
import styles from './page.module.css';
import Image from 'next/image';

export default function profissoes() {
    const listaProfissoes = [
        {
            id: 1,
            nome: "Diretor",
            explicacao: "O líder criativo do filme. Ele define a visão artística, orienta os atores e comanda toda a equipe técnica para transformar o roteiro em imagens.",
        },
        {
            id: 2,
            nome: "Produtor",
            explicacao: "O responsável por viabilizar o filme. Ele cuida do orçamento, consegue o dinheiro, contrata a equipe principal e gerencia toda a logística do projeto.",
        },
        {
            id: 3,
            nome: "Ator/Atriz",
            explicacao: " O profissional que dá vida aos personagens da história. Ele estuda o roteiro para entender as emoções e motivações do papel, utilizando sua voz, expressões faciais e movimentos corporais para interpretar a cena diante das câmeras.",
        },
        {
            id: 4,
            nome: "Roteirista",
            explicacao: "Quem escreve a história. Cria os diálogos, a estrutura das cenas, os personagens e todas as ações que acontecerão na tela.",
        },
        {
            id: 5,
            nome: "Diretor de fotografia",
            explicacao: "O profissional que traduz o roteiro em imagens. Ele escolhe as câmeras, as lentes e planeja toda a iluminação e enquadramento das cenas",
        },
        {
            id: 6,
            nome: "Diretor de Elenco",
            explicacao: "Responsável por encontrar e selecionar os atores ideais para cada papel do filme por meio de testes e pesquisas.",
        },
        {
            id: 7,
            nome: "Figurinista",
            explicacao: "Cria e seleciona todas as roupas e acessórios que os personagens usam, garantindo que combinem com a época e a personalidade de cada um",
        },
        {
            id: 8,
            nome: "Designer de produção",
            explicacao: "Também conhecido como Diretor de Arte, ele planeja o visual geral do filme, incluindo as cores, o estilo dos cenários, objetos e a atmosfera visual.",
        },
        {
            id: 9,
            nome: "Preparador de Elenco",
            explicacao: "Um profissional focado em ajudar os atores a alcançarem o tom emocional correto, ensaiando as cenas e aprofundando a construção dos personagens.",
        },
        {
            id: 10,
            nome: "Assistente de direção",
            explicacao: "O braço direito do diretor no set. Ele organiza o cronograma diário, garante que tudo aconteça no horário e gerencia a movimentação da equipe e dos figurantes.",
        },
        {
            id: 11,
            nome: "Operador de câmera",
            explicacao: "O técnico que fisicamente manipula e opera a câmera durante as gravações, seguindo as instruções de enquadramento do diretor de fotografia.",
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