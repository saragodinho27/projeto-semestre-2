'use client';
import { useState } from "react";

export default function NovoProduto() {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [erro, setErro] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        try {
            const precoNumber = Number(preco);
            // setErro(''); como sabemos se os inputs possuem conteúdo???
            if (nome.trim().length === 0 || !precoNumber) {
                setErro('Preencha os campos obrigatórios');
                return;
            }
            const produto = {
                nome: nome,
                preco: precoNumber,
            }
            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(produto), // converte objeto para json(string)
            });
            if (!response.ok) throw new Error('Erro ao adicionar produto');
            alert(`Produto ${nome} salvo.`)
            setNome('');
            setPreco('');
        } catch (error) {
            // console.log('Erro:', error)
            setErro(erro)
        }
    }


    return (
        <div>
            <h1>CADASTRO DE PRODUTO</h1>
            {erro && <p style={{ color: 'red' }}>{erro}!!!</p>}
            <form onSubmit={enviar}>
                <fieldset>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" placeholder="Digite o nome" required id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label htmlFor="preco">Preço: </label>
                    <input type="text" placeholder="Digite o preço" required id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </fieldset>
                <button type="submit" onClick={enviar}>Salvar</button>
                <button type="reset" onClick={() => { setNome(''); setPreco('') }}>Limpar</button>
            </form>

        </div>
    )
}