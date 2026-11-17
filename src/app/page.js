'use client';
import styles from "./page.module.css";

const categorias = [
  { id: 1, titulo: 'Marca-Paginas', imagem: 'image/marcaPagina.jpg' },
  { id: 2, titulo: 'Velas', imagem: 'image/velas.jpg' },
  { id: 3, titulo: 'Pingentes', imagem: 'image/pingentes.jpg' },
  { id: 4, titulo: 'Decoração', imagem: 'image/decoracoes.jpg' },
];

const queridinhas = [
  {
    id: 1,
    nome: 'Jogo de chá morango',
    preco: 'R$ 200,00',
    imagem: 'image/conjuntoMorango.jpg'
  },
  {
    id: 2,
    nome: 'Vaso de flor verde listrado',
    preco: 'R$ 50,00',
    imagem: 'image/vasoListradoVerde.jpg'
  },
  {
    id: 3,
    nome: 'Jogo de chá goiaba',
    preco: 'R$ 200,00',
    imagem: 'image/conjuntoGoiaba.jpg'
  },
  {
    id: 4,
    nome: 'Conjuntos chicaras de Abobora',
    preco: 'R$ 90,00',
    imagem: 'image/chicarasAbobora.jpg'
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.h1}>Conheça nossos produtos</h1>

        <div className={styles.categoriasGrid}>
          {categorias.map((item) => (
            <a href={`#${item.titulo.toLowerCase()}`} key={item.id} className={styles.categoriaCard}>
              <div className={styles.imagemWrapper}>
                <img src={item.imagem} alt={item.titulo} />
              </div>
              <span className={styles.categoriaTitulo}>{item.titulo}</span>
            </a>
          ))}
        </div>

        <section className={styles.quemSomosSection}>
          <div className={styles.quemSomosContainer}>

            <div className={styles.circuloImagem}>
              <img
                src="image/Sobre.png"
                alt="Quem somos"
              />
            </div>

            <div className={styles.quemSomosConteudo}>
              <h2 className={styles.quemSomosTitulo}>Quem está por trás da Cacarujas?</h2>
              <p className={styles.quemSomosTexto}>
                Apenas uma aluna tentando passar no IF. E que ama pássaros..
              </p>
              <a href="sobre" className={styles.botaoSaibaMais}>
                Saiba mais
              </a>
            </div>
          </div>
        </section>

        <section className={styles.queridinhasSection}>
          <h2 className={styles.queridinhasTitulo}>As queridinhas da clientela</h2>

          <div className={styles.queridinhasGrid}>
            {queridinhas.map((produto) => (
              <a href={`#produto-${produto.id}`} key={produto.id} className={styles.produtoCard}>
                <div className={styles.produtoImagemWrapper}>
                  <img src={produto.imagem} alt={produto.nome} />
                </div>
                <div className={styles.produtoInfo}>
                  <span className={styles.produtoNome}>{produto.nome}</span>
                  <span className={styles.produtoPreco}>{produto.preco}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaTextoContainer}>
            <div className={styles.ctaConteudo}>
              <h2 className={styles.ctaTitulo}>
                Aqui você encontra o "cacarujo" que faltava para sua casa!
              </h2>
              <a href="produtos" className={styles.ctaBotao}>
                Conheça os produtos
              </a>
            </div>
          </div>

          <div className={styles.ctaImagemContainer}>
            <img
              src="image/pratos.jpg"
              alt="Produção artesanal"
            />
          </div>
        </section>
      </main>
    </div>
  );
}