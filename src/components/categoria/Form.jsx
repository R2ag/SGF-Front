/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	const [optionsTipo, setOptionsTipo] = useState([]);

	const navigate = useNavigate();

	function carregarTipos() {
		axios.get('/tipos')
			.then((resp) => {
				if (resp.status === 200) {
					const dados = resp.data.map((obj) => {
						return {
							value: obj.id,
							label: obj.nome
						};
					});
					setOptionsTipo(dados);
				}else if(resp.status === 404){
					navigate("/categorias");
				}else{
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() =>{
		carregarTipos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormInput type="text" field="nome" label="Nome" placeholder="Nome da categoria" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
			<FormSelect field="tipoId" label="Tipo de Categoria" placeholder="Selecione o tipo da categoria..." error={errors?.tipoId} onChange={handleChange} value={inputs?.tipoId} options={optionsTipo} />
			<FormInput type="text" field="descricao" label="Descrição" placeholder="Descrição da categoria" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
			<FormInput type="text" field="observacao" label="Observação" placeholder="Observações da categoria" error={errors?.observacao} onChange={handleChange} value={inputs?.observacao} /> 
			<FormButtons cancelTarget="/categorias" />
		</form>
	)
}

export default Form