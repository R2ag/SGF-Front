import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"

const Listagem = () => {
	const [favorecidos, setFavorecidos] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarFavorecidos = () => {
		axios
			.get('/favorecidos')
			.then((resp) => {
				setFavorecidos(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarFavorecidos();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Favorecidos</h1>
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
							<th>Ramo</th>
							<th>CPF/CNPJ</th>
							<th>Email</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							favorecidos.map((favorecido) =>
								<tr key={favorecido.id}>
									<td>{favorecido.nome}</td>
									<td>{favorecido.ramo}</td>
									<td>{favorecido.cpfOuCnpj}</td>
									<td>{favorecido.email}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/favorecidos/alterar/${favorecido.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/favorecidos/excluir/${favorecido.id}`}>
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