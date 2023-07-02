import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"
const Listagem = () => {
	const [categorias, setCategorias] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarCategorias = () => {
		axios
			.get('/categorias')
			.then((resp) => {
				setCategorias(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarCategorias();
	}, []);

	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Categorias</h1>
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
							<th>Observação</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							categorias.map((categoria) =>
								<tr key={categoria.id}>
									<td>{categoria.nome}</td>
									<td>{categoria.tipo.nome}</td>
									<td>{categoria.descricao}</td>
									<td>{categoria.observacao}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/categorias/alterar/${categoria.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/categorias/excluir/${categoria.id}`}>
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