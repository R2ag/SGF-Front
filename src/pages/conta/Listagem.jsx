import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"

const Listagem = () => {
	const [contas, setContas] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarContas = () => {
		axios
			.get('/contas')
			.then((resp) => {
				setContas(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarContas();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Contas</h1>
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
							<th>Nome</th>
							<th>Tipo</th>
							<th>Descrição</th>
							<th>Saldo</th>
							<th>Usuário</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							contas.map((conta) =>
								<tr key={conta.id}>
									<td>{conta.nome}</td>
									<td>{conta.tipo}</td>
									<td>{conta.descricao}</td>
									<td>{conta.saldo}</td>
									<td>{conta.usuario.nome}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/contas/alterar/${conta.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/contas/excluir/${conta.id}`}>
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