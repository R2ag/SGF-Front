import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validar, handleChange } from "../../lib/FormUtils";

import validador from "../../lib/ValidadorConta";
import FormConta from '../../components/conta/Form';

const Alteracao = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const id = useParams().id;

	if (!id) {
		navigate('/contas');
	}

	function carregarDados() {
		axios.get(`/contas/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					setInputs(resp.data);
				} else if (resp.status === 404) {
					navigate("/contas");
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	function validarLocal(callbackAction) {
		validar(callbackAction, inputs, setErrors, validador);
	}

	function handleChangeLocal(e) {
		handleChange(e, setInputs, inputs);
	}


	function handleSubmit(e){
		e.preventDefault();
		validarLocal(() => {
			axios
				.put(`/contas/${id}`, inputs)
				.then((resp) => {
					if(resp.status == 200){
						toast.success("Conta Alterada com sucesso");
						navigate('/contas');
					}
				});
		});
	}

	useEffect(() => {
		validarLocal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputs]);


	return (
		<>
			<h1>Alteração de Conta</h1>
			<hr />
			<FormConta handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
		</>
	)
}

export default Alteracao