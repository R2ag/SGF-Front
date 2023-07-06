import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"

const Listagem = () => {
	const [usuarios, setUsuarios] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarUsuarios = () => {
		axios
			.get('/usuarios')
			.then((resp) => {
				setUsuarios(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarUsuarios();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>usuarios</h1>
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
							<th>CPF</th>
							<th>Email</th>
							<th>Usuário</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							usuarios.map((usuario) =>
								<tr key={usuario.id}>
									<td>{usuario.nome}</td>
									<td>{usuario.cpf}</td>
									<td>{usuario.email}</td>
									<td>{usuario.usuario}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/usuarios/alterar/${usuario.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/usuarios/excluir/${usuario.id}`}>
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