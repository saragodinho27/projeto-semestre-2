'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Produtos() {
    const [prods, setProds] = useState(null);

    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Produtos: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setProds(data);

            } catch (e) {
                console.log(`e.message`);
            }

        }
        fetchProds();
    }, []);

    

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
                                    <td>{prod.categoria_id}</td>
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