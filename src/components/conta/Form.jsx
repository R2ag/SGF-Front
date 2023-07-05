/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	const [optionsUsuario, setOptionsUsuario] = useState([]);

	const navigate = useNavigate();

	function carregarUsuarios() {
		axios.get('/usuarios')
			.then((resp) => {
				if (resp.status === 200) {
					const dados = resp.data.map((obj) => {
						return {
							value: obj.id,
							label: obj.nome
						};
					});
					setOptionsUsuario(dados);
				}else if(resp.status === 404){
					navigate("/contas");
				}else{
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() =>{
		carregarUsuarios();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormSelect field="usuarioId" label="Usuário" placeholder="Selecione o Usuário" error={errors?.usuarioId} onChange={handleChange} value={inputs?.usuarioId} options={optionsUsuario} />
			<FormInput type="text" field="nome" label="Nome" placeholder="Nome da conta" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
			<FormInput type="text" field="tipo" label="Tipo" placeholder="Tipo da conta" error={errors?.tipo} onChange={handleChange} value={inputs?.tipo} />
			<FormInput type="text" field="descricao" label="Descrição" placeholder="Descrição da conta" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
			<FormInput type="text" field="saldo" label="Saldo" placeholder="0" error={errors?.saldo} onChange={handleChange} value={inputs?.saldo} /> 
			<FormButtons cancelTarget="/contas" />
		</form>
	)
}

export default Form