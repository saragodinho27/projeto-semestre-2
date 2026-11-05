'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Produtos() {
    const [prods, setProds] = useState(null);
    const [cats, setCats] = useState(null);
    const [prod, setProds] = useState(null);
 
    useEffect(() => {
        const fetchProdutos = async () => {
            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');

            if (!response.ok) {
                throw new Error(`Erro ao buscar Categorias: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);
            setCats(data);
        };

        fetchProdutos();
    }, []);


    useEffect(() => {
        const fetchCats = async () => {
            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');

            if (!response.ok) {
                throw new Error(`Erro ao buscar Categorias: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);
            setCats(data);
        };

        fetchCats();
    }, []);

    const getNomeCategoria = (id_categoria) => {
        const categoria = cats?.find(cat => cat.id === id_categoria);
        return categoria ? categoria.nome : 'Categoria Indefinida'
    }

    return (
        <div>
            <h1>Produtos</h1>
            {prods === null ?
                <p>Carregando lista...</p> :
                <div>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Estoque</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prods.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    <td>{getNomeCategoria(prod.categoria_id)}</td>
                                    <td>{prod.quantidade_estoque}</td>
                                    <td>{prod.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}


//   /\             /\
//  /  \           /  \
// / /\ \_________/ /\ \
// |                    |
// |                    |
// | _____      _____   |
// |                    |
// \       ^--^         /
//  \__________________/
//      |____________|
//     /              \
//    |                \        |
//    |                 \    ___|
//    |  |     |  |      |__|
//    |  |     |  | __   |____|
//   _|  |    _|  |/    _|
//  |____|   |___ |____|