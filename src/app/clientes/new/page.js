'use client';
import { useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function NovoCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [erro, setErro] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            if (nome.trim().length === 0 || email.trim().length === 0) {
                setErro('Preencha pelo menos o nome e o e-mail do cliente');
                return;
            }

            const cliente = {
                nome: nome,
                email: email,
                telefone: telefone
            };

            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/clientes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });

            if (!response.ok) {
                const erroServidor = await response.text();
                throw new Error(`Erro ao adicionar cliente: ${erroServidor}`);
            }

            alert(`Cliente "${nome}" salvo com sucesso!`);
            limparFormulario();
        } catch (error) {
            setErro(error.message || 'Erro ao salvar cliente');
        }
    };

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setErro('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>CADASTRO DE CLIENTE</h1>
                <Link href="/clientes" className={styles.btnVoltar}>
                    Voltar para Clientes
                </Link>
            </div>

            {erro && (
                <p style={{ color: '#c41212', marginBottom: '16px', fontWeight: 'bold' }}>
                    {erro}!!!
                </p>
            )}

            <form onSubmit={enviar} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="nome">Nome: </label>
                    <input
                        type="text"
                        placeholder="Digite o nome completo"
                        required
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="email"
                        placeholder="exemplo@email.com"
                        required
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="telefone">Telefone: </label>
                    <input
                        type="text"
                        placeholder="(69) 99999-9999"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
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