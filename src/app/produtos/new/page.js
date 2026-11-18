'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css';

export default function NovoProduto() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
    const [preco, setPreco] = useState('');
    
    const [cats, setCats] = useState([]);
    const [erro, setErro] = useState('');

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
                if (response.ok) {
                    const data = await response.json();
                    setCats(data);
                }
            } catch (error) {
                console.log('Erro ao carregar categorias:', error);
            }
        };
        fetchCats();
    }, []);

    const enviar = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            const precoFormatado = String(preco).replace(',', '.');
            const precoNumber = Number(precoFormatado);
            const estoqueNumber = Number(quantidadeEstoque);

            if (
                nome.trim().length === 0 ||
                !precoNumber ||
                precoNumber <= 0 ||
                quantidadeEstoque === '' ||
                estoqueNumber < 0 ||
                !categoriaId
            ) {
                setErro('Preencha todos os campos obrigatórios corretamente');
                return;
            }

            const produto = {
                nome: nome,
                descricao: descricao,
                categoria_id: Number(categoriaId),
                quantidade_estoque: estoqueNumber,
                preco: precoNumber,
            };

            const response = await fetch('ttps://stock.dev.vilhena.ifro.edu.br/api/produtos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            if (!response.ok) {
                const erroServidor = await response.text();
                throw new Error(`Erro ao adicionar produto: ${erroServidor}`);
            }

            alert(`Produto "${nome}" salvo com sucesso!`);
            limparFormulario();
        } catch (error) {
            setErro(error.message || 'Erro ao salvar produto');
        }
    };

    const limparFormulario = () => {
        setNome('');
        setDescricao('');
        setCategoriaId('');
        setQuantidadeEstoque('');
        setPreco('');
        setErro('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <h1>CADASTRO DE PRODUTO</h1>
                <Link href="/produtos" className={styles.btnVoltar}>
                    Voltar para Produtos
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
                        placeholder="Digite o nome"
                        required
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="descricao">Descrição: </label>
                    <textarea
                        rows={3}
                        placeholder="Digite a descrição do produto"
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />

                    <label htmlFor="categoria">Categoria: </label>
                    <select
                        id="categoria"
                        required
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}
                    >
                        <option value="">Selecione uma categoria...</option>
                        {cats.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="estoque">Quantidade em Estoque: </label>
                    <input
                        type="number"
                        min="0"
                        placeholder="Ex: 15"
                        required
                        id="estoque"
                        value={quantidadeEstoque}
                        onChange={(e) => setQuantidadeEstoque(e.target.value)}
                    />

                    <label htmlFor="preco">Preço: </label>
                    <input
                        type="text"
                        placeholder="Ex: 27,00"
                        required
                        id="preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
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
