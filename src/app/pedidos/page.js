'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState(null);
    const [clientes, setClientes] = useState(null);
    const [pedidoSelected, setPedidoSelected] = useState(null);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/pedidos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Pedidos ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Pedidos:', data);
                setPedidos(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchPedidos();
    }, []);

    useEffect(() => {
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

    const getNomeCliente = (ped) => {
        if (typeof ped.cliente === 'string') return ped.cliente;
        if (ped.cliente?.nome) return ped.cliente.nome;

        const idCliente = ped.cliente_id || ped.usuario_id;
        const clienteEncontrado = clientes?.find(c => c.id === idCliente);
        return clienteEncontrado ? clienteEncontrado.nome : `Cliente #${idCliente || 'Indefinido'}`;
    };

    const formatarData = (dataString) => {
        if (!dataString) return 'Sem data';
        const data = new Date(dataString);
        if (isNaN(data.getTime())) return dataString;
        return data.toLocaleDateString('pt-BR');
    };

    const filtro = pedidos?.filter(p => {
        const nomeCliente = getNomeCliente(p);
        return (
            nomeCliente.toLowerCase().includes(busca.toLowerCase()) ||
            String(p.id).includes(busca)
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>Pedidos</h1>
                <Link href="/pedidos/new" className={styles.btnNovo}>
                    + Novo Pedido
                </Link>
            </div>

            <input
                type="text"
                placeholder="Busque por cliente ou ID"
                onChange={(e) => setBusca(e.target.value)}
                value={busca}
                className={styles.inputBusca}
            />

            {pedidos === null ? (
                <p>Carregando lista de pedidos...</p>
            ) : (
                <div>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CLIENTE</th>
                                <th>DATA</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(busca ? filtro : pedidos).map((ped) => (
                                <tr key={ped.id} onClick={() => setPedidoSelected(ped)}>
                                    <td>{ped.id}</td>
                                    <td>{getNomeCliente(ped)}</td>
                                    <td>{formatarData(ped.data || ped.data_pedido || ped.created_at)}</td>
                                    <td>{ped.status || 'Pendente'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {pedidoSelected && (
                <div className={styles.detalhesBox}>
                    <h3>Pedido #{pedidoSelected.id}</h3>
                    <p><strong>Cliente:</strong> {getNomeCliente(pedidoSelected)}</p>
                    <p><strong>Data:</strong> {formatarData(pedidoSelected.data || pedidoSelected.data_pedido || pedidoSelected.created_at)}</p>
                    <p><strong>Status:</strong> {pedidoSelected.status || 'Pendente'}</p>
                    <button onClick={() => setPedidoSelected(null)}>Fechar</button>
                </div>
            )}
        </div>
    );
}