/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
	const [usuario, setUsuario] = useState({});
	const id = useParams().id;

	const navigate = useNavigate();

	function carregarDados() {
		axios.get(`/usuarios/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					setUsuario(resp.data);
				} else if (resp.status === 404) {
					navigate("/usuarios");
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
			.delete(`/usuarios/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					toast.success("Usuário Excluída com sucesso");
					navigate('/usuarios');
				} else {
					console.log("Erro inesperado:", resp);
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 400) {
					console.log("Erro 400:", error.response.data);
					toast.error(JSON.stringify(error.response.data));
					navigate('/usuarios');
				} else {
					console.log("Erro inesperado:", error);
				}
			});
	}

	return (
		<>
			<h1>Exclusão de Usuário</h1>
			<hr />
			<p className="lead">Deseja realmente excluir o usuário {usuario.nome}?</p>
			<FormButtons cancelTarget="/usuarios" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
		</>
	)
}

export default Exclusao