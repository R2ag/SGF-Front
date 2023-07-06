import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"

const Listagem = () => {
	const [transacoes, setTransacoes] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarTransacoes = () => {
		axios
			.get('/transacoes')
			.then((resp) => {
				setTransacoes(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarTransacoes();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Transações</h1>
				<Link className="btn btn-primary" to="cadastrar">Nova</Link>
			</div>
			<hr />
			{loading && (
				<div className="text-center">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Carregando...</span>
					</div>
				</div>)}
			{!loading && (
				<table className={`table table-striped ${estilos.tabela}`}>
					<thead>
						<tr>
							<th>Data</th>
							<th>Descrição</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Conta</th>
							<th>Favorecido</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							transacoes.map((transacao) =>
								<tr key={transacao.id}>
									<td>{transacao.data}</td>
									<td>{transacao.descricao}</td>
									<td>{transacao.valor}</td>
									<td>{transacao.categoria.nome}</td>
									<td>{transacao.conta.nome}</td>
									<td>{transacao.favorecido.nome}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/transacoes/alterar/${transacao.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/transacoes/excluir/${transacao.id}`}>
											<i className="bi bi-trash" title="Excluir"></i>
										</Link>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			)}
		</>
	)
}

export default Listagem