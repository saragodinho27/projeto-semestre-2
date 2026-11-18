'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function NovoPedido() {
    const [clienteId, setClienteId] = useState('');
    const [produtoId, setProdutoId] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [clientes, setClientes] = useState([]);
    const [prods, setProds] = useState([]);
    const [erro, setErro] = useState('');

    // Carrega os clientes da API
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/clientes');
                if (response.ok) {
                    const data = await response.json();
                    setClientes(data);
                }
            } catch (error) {
                console.log('Erro ao carregar clientes:', error);
            }
        };
        fetchClientes();
    }, []);

    // Carrega os produtos da API
    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if (response.ok) {
                    const data = await response.json();
                    setProds(data);
                }
            } catch (error) {
                console.log('Erro ao carregar produtos:', error);
            }
        };
        fetchProds();
    }, []);

    const enviar = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            const qtdNumber = Number(quantidade);

            if (!clienteId || !produtoId || qtdNumber <= 0) {
                setErro('Preencha todos os campos obrigatórios');
                return;
            }

            const pedido = {
                cliente_id: Number(clienteId),
                produto_id: Number(produtoId),
                quantidade: qtdNumber,
            };

            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/pedidos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(pedido),
            });

            if (!response.ok) throw new Error('Erro ao adicionar pedido');

            alert('Pedido salvo com sucesso!');
            limparFormulario();
        } catch (error) {
            setErro(error.message || 'Erro ao salvar pedido');
        }
    };

    const limparFormulario = () => {
        setClienteId('');
        setProdutoId('');
        setQuantidade(1);
        setErro('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>NOVO PEDIDO</h1>
                <Link href="/pedidos" className={styles.btnVoltar}>
                    Voltar para Pedidos
                </Link>
            </div>

            {erro && <p style={{ color: 'red' }}>{erro}!!!</p>}

            <form onSubmit={enviar} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="cliente">Cliente: </label>
                    <select
                        id="cliente"
                        required
                        value={clienteId}
                        onChange={(e) => setClienteId(e.target.value)}
                    >
                        <option value="">Selecione um cliente...</option>
                        {clientes.map((cli) => (
                            <option key={cli.id} value={cli.id}>
                                {cli.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="produto">Produto: </label>
                    <select
                        id="produto"
                        required
                        value={produtoId}
                        onChange={(e) => setProdutoId(e.target.value)}
                    >
                        <option value="">Selecione um produto...</option>
                        {prods.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                                {prod.nome} - R$ {prod.preco}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="quantidade">Quantidade: </label>
                    <input
                        type="number"
                        min="1"
                        required
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </fieldset>

                <div className={styles.botoes}>
                    <button type="submit">Salvar</button>
                    <button type="reset" onClick={limparFormulario}>Limpar</button>
                </div>
            </form>
        </div>
    );
}