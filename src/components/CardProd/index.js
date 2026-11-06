export default function CardProd({produto}) {
    return (
        <div>
            <h2>id: {produto.id}; nome: {produto.nome};</h2>
            <p>descrição: {produto.descricao};</p>
            <p>Estoque: {produto.quantidade_estoque};</p>
            <p>Preço: {produto.preco};</p>
        </div>
    )
}