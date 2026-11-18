'use client';
import { useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function NovaCategoria() {
    const [nome, setNome] = useState('');
    const [erro, setErro] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            if (nome.trim().length === 0) {
                setErro('Digite o nome da categoria');
                return;
            }

            const categoria = {
                nome: nome,
            };

            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(categoria),
            });

            if (!response.ok) {
                const erroServidor = await response.text();
                throw new Error(`Erro ao adicionar categoria: ${erroServidor}`);
            }

            alert(`Categoria "${nome}" salva com sucesso!`);
            setNome('');
        } catch (error) {
            setErro(error.message || 'Erro ao salvar categoria');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>NOVA CATEGORIA</h1>
                <Link href="/categorias" className={styles.btnVoltar}>
                    Voltar para Categorias
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
                        placeholder="Digite o nome da categoria"
                        required
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </fieldset>

                <div className={styles.botoes}>
                    <button type="submit">Salvar</button>
                    <button type="reset" onClick={() => { setNome(''); setErro(''); }}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}