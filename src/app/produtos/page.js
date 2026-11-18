'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';
import CardProd from "@/components/CardProd";

export default function Produtos() {
    const [prods, setProds] = useState(null);
    const [cats, setCats] = useState(null);
    const [prodSelected, setProdSelected] = useState(null);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Produtos ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setProds(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchProds();
    }, []);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Categorias ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
                setCats(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchCats();
    }, []);

    const getNomeCategoria = (id_categoria) => {
        const categoria = cats?.find(cat => cat.id === id_categoria);
        return categoria ? categoria.nome : 'Categoria Indefinida';
    }

    const filtro = prods?.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>Produtos</h1>
                <Link href="/produtos/new" className={styles.btnNovo}>
                    + Novo Produto
                </Link>
            </div>

            <input
                type="text"
                placeholder="Busque um produto"
                onChange={(e) => setBusca(e.target.value)}
                value={busca}
                className={styles.inputBusca}
            />

            {prods === null ? (
                <p>Carregando lista de produtos...</p>
            ) : (
                <div>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>DESCRIÇÃO</th>
                                <th>CATEGORIA</th>
                                <th>ESTOQUE</th>
                                <th>PREÇO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(busca ? filtro : prods).map((prod) => (
                                <tr key={prod.id} onClick={() => setProdSelected(prod)}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    <td>{getNomeCategoria(prod.categoria_id)}</td>
                                    <td>{prod.quantidade_estoque}</td>
                                    <td>R$ {prod.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {prodSelected && (
                <div className={styles.cardWrapper}>
                    <CardProd produto={prodSelected} />
                </div>
            )}
        </div>
    );
}
