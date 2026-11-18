'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function Categorias() {
    const [cats, setCats] = useState(null);
    const [catSelected, setCatSelected] = useState(null);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        document.title = 'Categorias - Cacarujos Shop';

        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Categorias: ${response.statusText}`);
                }
                const data = await response.json();
                setCats(Array.isArray(data) ? data : data.data || []);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchCats();
    }, []);

    const filtro = cats?.filter(c =>
        (c.nome && c.nome.toLowerCase().includes(busca.toLowerCase())) ||
        String(c.id).includes(busca)
    );

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>Categorias</h1>
                <Link href="/categorias/new" className={styles.btnNovo}>
                    + Nova Categoria
                </Link>
            </div>

            <input
                type="text"
                placeholder="Busque por nome ou ID"
                onChange={(e) => setBusca(e.target.value)}
                value={busca}
                className={styles.inputBusca}
            />

            {cats === null ? (
                <p>Carregando lista de categorias...</p>
            ) : (
                <div className={styles.tabelaWrapper}>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(busca ? filtro : cats).map((cat) => (
                                <tr key={cat.id} onClick={() => setCatSelected(cat)}>
                                    <td>{cat.id}</td>
                                    <td>{cat.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {catSelected && (
                <div className={styles.detalhesBox}>
                    <h3>Categoria #{catSelected.id}</h3>
                    <p><strong>Nome:</strong> {catSelected.nome}</p>
                    <button onClick={() => setCatSelected(null)}>Fechar</button>
                </div>
            )}
        </div>
    );
}