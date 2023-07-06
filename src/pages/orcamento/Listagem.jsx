import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import estilos from "./Listagem.module.css"

const Listagem = () => {
	const [orcamentos, setOrcamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	const carregarOrcamentos = () => {
		axios
			.get('/orcamentos')
			.then((resp) => {
				setOrcamentos(resp.data);
				setLoading(false);
			});
	}

	useEffect(() => {
		carregarOrcamentos();
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
							<th>Data Inicial</th>
							<th>DataFinal</th>
							<th>Valor</th>
							<th>Usuario</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							orcamentos.map((orcamento) =>
								<tr key={orcamento.id}>
									<td>{orcamento.dataInicio}</td>
									<td>{orcamento.dataFinal}</td>
									<td>{orcamento.valorTotal}</td>
									<td>{orcamento.usuario.nome}</td>
									<td>
										<Link className="btn btn-sm btn-success me-1" to={`/categorias/alterar/${orcamento.id}`}>
											<i className="bi bi-pen" title="Alterar"></i>
										</Link>
										<Link className="btn btn-sm btn-danger" to={`/categorias/excluir/${orcamento.id}`}>
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