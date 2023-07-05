/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
	const [transacao, setTransacao] = useState({});
	const id = useParams().id;

	const navigate = useNavigate();

	function carregarDados() {
		axios.get(`/transacoes/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					setTransacao(resp.data);
				} else if (resp.status === 404) {
					navigate("/transacoes");
				} else {
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		carregarDados();
	}, [id]);

	function handleDelete() {
		axios
			.delete(`/transacoes/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					toast.success("Transação Excluida com sucesso");
					navigate('/transacoes');
				} else {
					console.log("Erro inesperado:", resp);
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 400) {
					console.log("Erro 400:", error.response.data);
					toast.error(JSON.stringify(error.response.data));
					navigate('/transacoes');
				} else {
					console.log("Erro inesperado:", error);
				}
			});
	}

	return (
		<>
			<h1>Exclusão de Transação</h1>
			<hr />
			<p className="lead">Deseja realmente excluir a transação {transacao.descricao} do dia {transacao.data}?</p>
			<FormButtons cancelTarget="/transacoes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
		</>
	)
}

export default Exclusao