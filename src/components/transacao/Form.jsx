/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	const [optionsUsuarios, setOptionsUsuarios] = useState([]);
	const [optionsCategorias, setOptionsCategorias] = useState([]);
	const [optionsTipos, setOptionsTipos] = useState([]);
	const [optionsFavorecidos, setOptionsFavorecidos] = useState([]);

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
					setOptionsUsuarios(dados);
				}else if(resp.status === 404){
					navigate("/transacoes");
				}else{
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

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
					setOptionsTipos(dados);
				}else if(resp.status === 404){
					navigate("/transacoes");
				}else{
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function carregarCategorias() {
		axios.get('/categorias')
			.then((resp) => {
				if (resp.status === 200) {
					const dados = resp.data.map((obj) => {
						return {
							value: obj.id,
							label: obj.nome
						};
					});
					setOptionsCategorias(dados);
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

	function carregarFavorecidos() {
		axios.get('/favorecidos')
			.then((resp) => {
				if (resp.status === 200) {
					const dados = resp.data.map((obj) => {
						return {
							value: obj.id,
							label: obj.nome
						};
					});
					setOptionsFavorecidos(dados);
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

	useEffect(() =>{
		carregarUsuarios();
		carregarCategorias();
		carregarFavorecidos();
		carregarTipos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormSelect field="usuarioId" label="Usuário" placeholder="Selecione o Usuário" error={errors?.usuarioId} onChange={handleChange} value={inputs?.usuarioId} options={optionsUsuarios} />
			<FormInput type="date" field="data" label="Data" placeholder="01/01/2023" error={errors?.data} onChange={handleChange} value={inputs?.data} />
			<FormInput type="text" field="descricao" label="Descrição" placeholder="Descrição da conta" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
			<FormInput type="text" field="valor" label="Valor" placeholder="0" error={errors?.valor} onChange={handleChange} value={inputs?.valor} /> 
			<FormSelect field="favorecidoId" label="Favorecido" placeholder="Selecione o Favorecido" error={errors?.favorecidoId} onChange={handleChange} value={inputs?.favorecidoId} options={optionsFavorecidos} />
			<FormSelect field="categoriaId" label="Categoria" placeholder="Selecione a Categoria" error={errors?.categoriaId} onChange={handleChange} value={inputs?.categoriaId} options={optionsCategorias} />
			<FormSelect field="tipoId" label="Tipo de Categoria" placeholder="Selecione o tipo da categoria..." error={errors?.tipoId} onChange={handleChange} value={inputs?.tipoId} options={optionsTipos} />
			
			
			
			<FormButtons cancelTarget="/transacoes" />
		</form>
	)
}

export default Form