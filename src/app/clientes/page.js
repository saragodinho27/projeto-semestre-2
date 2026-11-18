'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function Clientes() {
    const [clientes, setClientes] = useState(null);
    const [clienteSelected, setClienteSelected] = useState(null);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        document.title = 'Clientes - Cacarujos Shop';

        const fetchClientes = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/clientes');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Clientes ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Clientes:', data);
                setClientes(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchClientes();
    }, []);

    const filtro = clientes?.filter(c =>
        (c.nome && c.nome.toLowerCase().includes(busca.toLowerCase())) ||
        (c.email && c.email.toLowerCase().includes(busca.toLowerCase())) ||
        String(c.id).includes(busca)
    );

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>Clientes</h1>
                <Link href="/clientes/new" className={styles.btnNovo}>
                    + Novo Cliente
                </Link>
            </div>

            <input
                type="text"
                placeholder="Busque por nome, e-mail ou ID"
                onChange={(e) => setBusca(e.target.value)}
                value={busca}
                className={styles.inputBusca}
            />

            {clientes === null ? (
                <p>Carregando lista de clientes...</p>
            ) : (
                <div className={styles.tabelaWrapper}>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>E-MAIL</th>
                                <th>TELEFONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(busca ? filtro : clientes).map((cli) => (
                                <tr key={cli.id} onClick={() => setClienteSelected(cli)}>
                                    <td>{cli.id}</td>
                                    <td>{cli.nome}</td>
                                    <td>{cli.email || '-'}</td>
                                    <td>{cli.telefone || cli.celular || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {clienteSelected && (
                <div className={styles.detalhesBox}>
                    <h3>Cliente #{clienteSelected.id}</h3>
                    <p><strong>Nome:</strong> {clienteSelected.nome}</p>
                    <p><strong>E-mail:</strong> {clienteSelected.email || 'Não informado'}</p>
                    <p><strong>Telefone:</strong> {clienteSelected.telefone || clienteSelected.celular || 'Não informado'}</p>
                    <button onClick={() => setClienteSelected(null)}>Fechar</button>
                </div>
            )}
        </div>
    );
}