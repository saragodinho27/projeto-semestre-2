'use client'
import styles from './page.module.css';
import Image from 'next/image';
import { useState } from "react";

export default function Generos() {
    const [activeTab, setActiveTab] = useState("generos");

    const handleScrollToSection = (idFormatado) => {
        const elemento = document.getElementById(idFormatado);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const dados = {
        generos: {
            titulo: "Gêneros",
            descricao: "A estrutura comercial e narrativa do filme. Define as regras gerais da história.",
            itens: [
                {
                    nome: "Ação",
                    detalhe: "A ação é um gênero cinematográfico caracterizado por histórias com muitos acontecimentos, conflitos e desafios. Geralmente, os personagens precisam cumprir uma missão, enfrentar obstáculos, escapar de alguma situação ou impedir que algo aconteça. É comum encontrar perseguições, confrontos, corridas, fugas e situações de perigo. O foco costuma estar nas atitudes dos personagens e no desenvolvimento dos acontecimentos. Um filme de ação também pode apresentar outros gêneros, como aventura, ficção científica ou comédia.",
                    imagens: ["/images/JohnWick.jpg", "/images/missaoImpossivel.webp", "/images/VelozesFuriosos.webp"]
                },

                {
                    nome: "Comédia",
                    detalhe: "A comédia tem como principal objetivo provocar humor no público. Para isso, pode utilizar situações engraçadas, confusões, personagens com comportamentos divertidos, exageros, ironias e acontecimentos inesperados. A comédia pode contar uma história totalmente voltada para o humor ou combinar o humor com outros gêneros. Além de divertir, algumas comédias também utilizam o humor para fazer críticas à sociedade, aos comportamentos das pessoas ou a determinadas situações.",
                    imagens: ["/images/branquelas.jpg", "/images/chris.webp", "/images/theOffice.jpg"]
                },

                { nome: "Drama", 
                    detalhe: "O drama dá grande importância aos sentimentos, conflitos e problemas enfrentados pelos personagens. As histórias podem abordar dificuldades familiares, perdas, mudanças, decisões complicadas, relacionamentos e momentos importantes da vida. O objetivo é mostrar como os personagens lidam com essas situações e como elas podem transformá-los. Um drama não precisa ser necessariamente triste, pois o gênero está principalmente relacionado à presença de conflitos humanos e emocionais.",
                imagens: ["/images/extraordinario.jpg", "/images/vento.jpg", "/images/milagre.jpg"]
                },

                { nome: "Terror", 
                    detalhe: "O terror é um gênero criado principalmente para provocar medo, tensão ou sensação de ameaça no público. As histórias podem envolver criaturas, fantasmas, acontecimentos sobrenaturais, lugares assustadores, situações perigosas ou ameaças desconhecidas. Também existe o terror psicológico, que trabalha mais com os pensamentos, medos e percepções dos personagens. O objetivo é criar uma atmosfera na qual o público sinta que alguma coisa perigosa ou assustadora pode acontecer.",
                    imagens: ["/images/invocaçãoDoMal.jpg", "/images/hillHouse.jpg", "/images/it.jpg"]
                 },

                { nome: "Romance", 
                    detalhe: "O romance apresenta relacionamentos amorosos como uma parte importante da história. A narrativa pode acompanhar a aproximação entre duas pessoas, seus conflitos, suas diferenças, suas escolhas e as dificuldades que enfrentam para manter o relacionamento. O romance pode ser combinado com outros gêneros, como comédia, drama, ação ou fantasia. É importante não confundir o gênero romance com o tema amor, pois uma história pode apresentar amor como tema sem ser necessariamente do gênero romance.",
                imagens: ["/images/garotosQueJáAmei.jpg", "/images/diarioPaixao.jpg", "/images/titanic.jpg"]
             },

                { nome: "Ficção Científica", 
                    detalhe: "A ficção científica utiliza ideias relacionadas à ciência, tecnologia e possibilidades imaginadas. As histórias podem apresentar viagens espaciais, robôs, inteligência artificial, viagens no tempo, outros planetas, tecnologias avançadas ou sociedades futuristas. Muitas obras desse gênero procuram imaginar como seria o mundo caso determinada descoberta ou tecnologia existisse. Além de apresentar coisas futuristas, a ficção científica também pode discutir problemas humanos, sociais e éticos relacionados ao uso da ciência e da tecnologia.",
                imagens: ["/images/interestelar.jpg", "/images/estrelas.jpg", "/images/strangerThings.jpg"]
             },

                { nome: "Fantasia", 
                    detalhe: "A fantasia é um gênero que apresenta elementos que não existem ou não funcionam de acordo com as regras do mundo real. Pode envolver magia, criaturas fantásticas, poderes sobrenaturais, mundos imaginários, reinos fictícios e objetos mágicos. As histórias de fantasia normalmente criam suas próprias regras para o funcionamento daquele universo. Mesmo sendo imaginárias, elas podem abordar temas muito humanos, como amizade, coragem, família, poder e crescimento pessoal.",
                imagens: ["/images/harryPotter.jpg", "/images/senhorDosAnéis.jpg", "/images/narnia.jpg"]
             },

                { nome: "Suspense", 
                    detalhe: "O suspense é um gênero que procura manter o público em estado de expectativa e tensão. Normalmente existe algum perigo, segredo, ameaça ou problema que ainda não foi resolvido. A história apresenta informações aos poucos, fazendo com que o público queira descobrir o que acontecerá em seguida. O suspense pode aparecer em histórias de ação, terror, crime ou mistério. Sua principal característica é criar a sensação de que algo importante está prestes a acontecer.",
                imagens: ["/images/garotaExemplar.webp", "/images/ilhaDoMedo.jpg", "/images/you.jpg"]
                },

                { nome: "Mistério", 
                    detalhe: "O mistério é um gênero baseado principalmente na descoberta de algo desconhecido. Pode envolver um crime, um desaparecimento, um segredo, uma mensagem misteriosa ou algum acontecimento difícil de explicar. Durante a história, são apresentadas pistas que ajudam os personagens e o público a tentar descobrir a resposta. O mistério geralmente faz o espectador pensar, analisar informações e tentar descobrir a solução antes que ela seja revelada.",
                imagens: ["/images/knivesOut.jpg", "/images/sherlock.jpg", "/images/homicidios.webp"]
                },

                { nome: "Aventura", 
                    detalhe: "A aventura é um gênero baseado em jornadas, explorações, missões e desafios. Os personagens normalmente precisam viajar, descobrir lugares, encontrar alguma coisa ou cumprir determinado objetivo. Durante essa jornada, eles enfrentam obstáculos que testam suas habilidades e sua determinação. A aventura pode acontecer em lugares reais, históricos, futuristas ou completamente imaginários e pode ser combinada com ação, fantasia ou ficção científica.",
                imagens: ["/images/jurassicPark.webp", "/images/indianaJones.webp", "/images/foraDoMapa.jpg"] },

                { nome: "Animação", 
                    detalhe: "A animação é uma forma de produção audiovisual em que o movimento é criado por meio de imagens produzidas ou manipuladas para dar a impressão de movimento. Ela pode utilizar desenhos, imagens digitais, modelos tridimensionais ou técnicas como stop motion. A animação não determina necessariamente o tipo de história, pois pode apresentar comédia, ação, drama, aventura, fantasia ou ficção científica. Por isso, uma animação pode abordar praticamente qualquer gênero ou tema.",
                    imagens: ["/images/toyStory.jpg", "/images/aranhaVerso.jpg", "/images/pony.jpg"]
                },

                { nome: "Documentário", 
                    detalhe: "O documentário é um gênero voltado principalmente para acontecimentos, pessoas, lugares, fatos ou situações relacionados ao mundo real. Ele pode utilizar entrevistas, imagens reais, documentos, gravações antigas, fotografias e narração. O objetivo pode ser informar, investigar, registrar acontecimentos ou apresentar diferentes perspectivas sobre determinado assunto. Existem documentários científicos, históricos, sociais, esportivos, ambientais e de vários outros tipos.",
                imagens: ["/images/dinossauros.jpg", "/images/dilemaRedes.jpeg", "/images/vidaPlaneta.jpg"]
                },

                { nome: "Musical", 
                    detalhe: "O musical é um gênero em que a música possui uma função importante dentro da narrativa. As músicas e apresentações podem ajudar a mostrar os sentimentos dos personagens, desenvolver acontecimentos ou transmitir informações. Diferentemente de simplesmente colocar uma música de fundo, no musical a música pode fazer parte da própria história. Esse gênero também pode ser combinado com comédia, romance, drama, fantasia ou aventura.",
                imagens: ["/images/reiDoShow.jpg", "/images/matilda.jpg", "/images/wicked.webp"]
             },

                { nome: "Faroeste", 
                    detalhe: "O faroeste, também conhecido como western, é um gênero tradicionalmente relacionado ao Velho Oeste dos Estados Unidos. Suas histórias podem apresentar cidades de fronteira, grandes paisagens, viagens, conflitos, personagens ligados à lei e criminosos. Além da aventura, o faroeste costuma explorar questões como justiça, liberdade, sobrevivência e conflitos entre diferentes grupos. Embora seja tradicionalmente associado a um período histórico específico, suas características também podem ser utilizadas em histórias ambientadas em outros lugares e épocas.",
                imagens: ["/images/yellowstone.webp", "/images/imperdoaveis.jpg", "/images/djangoLivre.jpg"]
             },

                { nome: "Crime", 
                    detalhe: "O gênero crime concentra-se em acontecimentos relacionados a crimes e nas pessoas envolvidas neles. A história pode acompanhar investigadores tentando descobrir o responsável por um crime, criminosos planejando suas ações ou pessoas tentando descobrir a verdade. Esse gênero frequentemente se mistura com mistério, suspense, ação e drama. As histórias de crime podem explorar questões relacionadas à justiça, à moralidade, às consequências das escolhas e às relações entre criminosos e investigadores.",
                imagens: ["/images/imperdoaveis.jpg", "/images/BB.webp", "/images/chefão.jpg"]
             }
            ]
        },
        temas: {
            titulo: "Temas",
            descricao: "O coração emocional e a mensagem profunda da obra. É sobre o que o filme realmente fala por trás da ação.",
            itens: [
                { nome: "Amizade", detalhe: "O tema da amizade aborda a relação entre pessoas que desenvolvem confiança, companheirismo e consideração umas pelas outras. Uma história sobre amizade pode mostrar personagens que enfrentam dificuldades juntos, aprendem a confiar uns nos outros ou precisam resolver conflitos que ameaçam sua relação. A amizade pode ser especialmente importante em histórias de aventura, nas quais os personagens dependem uns dos outros para superar desafios." },

                { nome: "Vingança", detalhe: "A vingança é um tema relacionado ao desejo de uma pessoa de fazer alguém pagar por uma ação que considera injusta ou prejudicial. Uma história com esse tema pode acompanhar um personagem que passa a buscar uma forma de retribuir aquilo que sofreu. A narrativa também pode mostrar as consequências dessa decisão e questionar se a vingança realmente traz justiça ou apenas cria novos conflitos." },

                { nome: "Família", detalhe: "O tema da família aborda as relações entre familiares e os sentimentos, conflitos e responsabilidades existentes entre eles. Pode mostrar pais e filhos, irmãos, avós ou outros membros da família enfrentando dificuldades juntos. Uma história pode explorar proteção, confiança, conflitos, separações, reconciliações e mudanças dentro da família. Esse tema pode aparecer em praticamente qualquer gênero." },

                { nome: "Amor", detalhe: "O amor é um tema amplo que pode aparecer de diversas maneiras. Pode representar o amor entre familiares, amigos ou pessoas que possuem um relacionamento romântico. Uma história pode mostrar como o amor influencia as decisões dos personagens, faz com que eles enfrentem dificuldades ou fortalece suas relações. Por ser um tema muito amplo, ele pode aparecer em histórias de drama, aventura, fantasia, ação e muitos outros gêneros." },

                { nome: "Guerra", detalhe: "O tema da guerra aborda conflitos entre grupos, povos, sociedades ou países. Uma história pode mostrar os acontecimentos de uma guerra, mas também pode concentrar-se nas consequências que ela causa na vida das pessoas. Pode explorar coragem, sobrevivência, família, amizade, poder, justiça e decisões difíceis. O tema pode aparecer tanto em histórias baseadas em acontecimentos históricos quanto em mundos fictícios." },

                { nome: "Poder", detalhe: "O tema do poder explora a capacidade de uma pessoa ou grupo controlar, influenciar ou tomar decisões que afetam outras pessoas. Pode envolver governos, líderes, riqueza, autoridade, tecnologia ou influência social. Muitas histórias utilizam esse tema para questionar o que acontece quando alguém possui poder demais e como esse poder pode ser utilizado de maneira positiva ou negativa." },

                { nome: "Sobrevivência", detalhe: "O tema da sobrevivência aparece quando os personagens precisam enfrentar condições difíceis para permanecer seguros ou continuar vivendo. Eles podem estar isolados, enfrentar um ambiente perigoso, passar por um desastre ou ter poucos recursos disponíveis. A sobrevivência pode testar a coragem, inteligência, resistência e capacidade de tomar decisões dos personagens. Esse tema é muito comum em histórias de aventura, ação, terror e ficção científica." },

                { nome: "Crescimento pessoal", detalhe: "O crescimento pessoal mostra a transformação de um personagem durante a história. No início, ele pode possuir determinadas características, medos ou dificuldades, mas os acontecimentos fazem com que ele aprenda e amadureça. Esse crescimento pode envolver aprender com os próprios erros, assumir responsabilidades, enfrentar dificuldades ou compreender melhor outras pessoas. O foco está na mudança interior do personagem." },

                { nome: "Justiça", detalhe: "O tema da justiça explora questões relacionadas ao certo e ao errado e à maneira como as pessoas devem ser tratadas quando cometem determinadas ações. Uma história pode apresentar personagens tentando corrigir uma injustiça, descobrir a verdade ou responsabilizar alguém por suas ações. Também pode questionar se as leis são sempre justas e se existe diferença entre justiça e vingança." },

                { nome: "Identidade", detalhe: "A identidade está relacionada à descoberta de quem uma pessoa é e de como ela entende a si mesma. Uma história com esse tema pode mostrar personagens descobrindo seu passado, suas origens, suas características ou seu lugar no mundo. Também pode apresentar mudanças na maneira como o personagem se enxerga. Por isso, o tema da identidade costuma estar ligado ao autoconhecimento e ao crescimento pessoal." },

                { nome: "Liberdade", detalhe: "O tema da liberdade aborda o desejo de poder tomar as próprias decisões e viver sem controle ou opressão injusta. Pode aparecer em histórias nas quais personagens vivem sob governos autoritários, regras excessivas ou situações que limitam suas escolhas. A história pode mostrar personagens tentando conquistar sua liberdade ou discutir até onde uma pessoa deve estar disposta a ir para consegui-la." }
            ]
        },
        estilos: {
            titulo: "Estilos / Abordagens",
            descricao: "A identidade visual e a estética do diretor. Define a forma como a história é apresentada na tela.",
            itens: [
                { nome: "Realista", detalhe: "O estilo realista procura representar situações, personagens e ambientes de maneira próxima da realidade. Os acontecimentos são geralmente plausíveis e os personagens possuem comportamentos e problemas que poderiam existir no mundo real. Uma história não precisa ser baseada em acontecimentos reais para ser realista. Ela apenas precisa apresentar um universo que siga uma lógica semelhante à nossa realidade." },

                { nome: "Surrealista", detalhe: "O estilo surrealista mistura elementos reais com situações estranhas, impossíveis ou aparentemente sem lógica. Pode apresentar sonhos, transformações, acontecimentos absurdos e imagens simbólicas. Muitas vezes, o objetivo não é explicar tudo de maneira lógica, mas transmitir sentimentos, ideias ou significados. O espectador pode precisar interpretar o que determinados acontecimentos representam." },

                { nome: "Experimental", detalhe: "O estilo experimental procura explorar maneiras diferentes de contar uma história. O filme pode brincar com a montagem, o som, a câmera, o tempo, os diálogos ou a estrutura narrativa. Em vez de seguir sempre o modelo tradicional de começo, desenvolvimento e final, a obra pode experimentar novas formas de apresentar acontecimentos e personagens. A intenção é explorar possibilidades diferentes de linguagem cinematográfica." },

                { nome: "Satírico", detalhe: "O estilo satírico utiliza humor, exagero, ironia ou situações absurdas para criticar comportamentos, pessoas, instituições ou problemas da sociedade. Uma obra satírica pode parecer engraçada na superfície, mas apresentar uma crítica por trás do humor. Dessa maneira, o público pode rir e, ao mesmo tempo, perceber que a história está fazendo uma reflexão sobre determinado problema." },

                { nome: "Psicológico", detalhe: "O estilo psicológico concentra-se principalmente na mente e na experiência interna dos personagens. A narrativa pode mostrar pensamentos, sentimentos, lembranças, medos, dúvidas e conflitos internos. Em algumas histórias, entender o que o personagem pensa é tão importante quanto entender os acontecimentos externos. Esse estilo pode fazer o público questionar o que é realidade, memória ou percepção." },

                { nome: "Distópico", detalhe: "O estilo distópico apresenta uma sociedade que possui características negativas, como controle excessivo, desigualdade, falta de liberdade, vigilância ou governos autoritários. A história pode mostrar personagens vivendo dentro desse sistema e tentando compreender ou enfrentar suas regras. Muitas obras distópicas também fazem críticas à sociedade atual, imaginando o que poderia acontecer se determinados problemas fossem levados a extremos." },

                { nome: "Não linear", detalhe: "O estilo não linear apresenta os acontecimentos fora da ordem cronológica. Em vez de mostrar tudo na sequência em que aconteceu, a história pode começar pelo final, voltar ao passado e depois retornar ao presente. Pode utilizar flashbacks, memórias ou acontecimentos de diferentes períodos. Essa técnica pode ser usada para criar suspense, esconder informações ou fazer o público montar a sequência dos acontecimentos por conta própria." }
            ]
        }
    };

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Gêneros, Temas e Estilos</h1>
                <p className={styles.subtitle}>
                    Muitas pessoas misturam esses conceitos, mas eles <strong>não são</strong> a mesma coisa. Escolha uma categoria para explorar.
                </p>
            </header>

            <nav className={styles.tabsMenu}>
                {Object.keys(dados).map((chave) => (
                    <button
                        key={chave}
                        className={`${styles.tabBtn} ${activeTab === chave ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(chave)}
                    >
                        {dados[chave].titulo}
                    </button>
                ))}
            </nav>

            <section className={styles.contentPanel}>
                <div className={styles.infoBox}>
                    <h2>{dados[activeTab].titulo}</h2>
                    <p>{dados[activeTab].descricao}</p>
                </div>

                <div className={styles.gridItens}>
                    {dados[activeTab].itens.map((item, index) => {
                        const idFormatado = `item-${item.nome.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <button
                                key={index}
                                className={styles.cardItemBtn}
                                onClick={() => handleScrollToSection(idFormatado)}
                            >
                                <span>{item.nome}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className={styles.explanationsSection}>
                <h3 className={styles.sectionDividerTitle}>Dicionário de Termos</h3>
                <div className={styles.explanationsList}>
                    {dados[activeTab].itens.map((item, index) => {
                        const idFormatado = `item-${item.nome.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <article key={index} id={idFormatado} className={styles.explanationRow}>
                                <div className={styles.termHeader}>
                                    <h4>{item.nome}</h4>
                                </div>
                                <div className={styles.termBody}>
                                    <p>{item.detalhe}</p>

                                    {item.imagens && item.imagens.length > 0 && (
                                        <div className={styles.examplesGrid}>
                                            {item.imagens.map((imgUrl, idx) => (
                                                <div key={idx} className={styles.exampleImageWrapper}>
                                                    <Image
                                                        src={imgUrl}
                                                        alt={`Exemplo de ${item.nome}`}
                                                        fill
                                                        className={styles.exampleImage}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}