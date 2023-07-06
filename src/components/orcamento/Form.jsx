/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	const [optionsUsuario, setOptionsUsuario] = useState([]);
	const [optionsCategorias, setOptionsCategorias] = useState([]);
	const [orcamentosCategorias, setOrcamentosCategorias] = useState([]);

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
				} else if (resp.status === 404) {
					navigate("/orcamentos");
				} else {
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
					navigate("/orcamentos");
				} else {
					console.log(resp);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const handleOrcamentoCategoriaChange = (index, field, value) => {
		const updatedOrcamentosCategorias = [...orcamentosCategorias];
		updatedOrcamentosCategorias[index][field] = value;
		setOrcamentosCategorias(updatedOrcamentosCategorias);
	};

	const addOrcamentoCategoria = () => {
		setOrcamentosCategorias([...orcamentosCategorias, { descricao: "", valor: "", categoriaId: "" }]);
	};

	const removeOrcamentoCategoria = (index) => {
		const updatedOrcamentosCategorias = [...orcamentosCategorias];
		updatedOrcamentosCategorias.splice(index, 1);
		setOrcamentosCategorias(updatedOrcamentosCategorias);
	};

	useEffect(() => {
		carregarUsuarios();
		carregarCategorias();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormSelect field="usuarioId" label="Usuário" placeholder="Selecione o Usuário" error={errors?.usuarioId} onChange={handleChange} value={inputs?.usuarioId} options={optionsUsuario} />
			<FormInput type="date" field="dataInicio" label="Data" placeholder="01/01/2023" error={errors?.dataInicio} onChange={handleChange} value={inputs?.dataInicio} />
			<FormInput type="date" field="dataFinal" label="Data" placeholder="31/01/2023" error={errors?.dataFinal} onChange={handleChange} value={inputs?.dataFinal} />
			<FormInput type="text" field="valorTotal" label="Valor" placeholder="1000" error={errors?.valorTotal} onChange={handleChange} value={inputs?.valorTotal} />

			{orcamentosCategorias.map((orcamentoCategoria, index) => (
				<div className="row align-items-center" key={index}>
					<div className="col-md-3">
						<FormSelect
							field={`orcamentosCategorias.${index}.categoriaId`}
							label="Categoria"
							placeholder="Selecione a categoria"
							error={errors?.orcamentosCategorias?.[index]?.categoriaId}
							onChange={(e) => handleOrcamentoCategoriaChange(index, "categoriaId", e.target.value)}
							value={orcamentoCategoria.categoriaId}
							options={optionsCategorias}
						/>
					</div>
					<div className="col-md-5">
						<FormInput
							type="text"
							field={`orcamentosCategorias.${index}.descricao`}
							label="Descrição"
							placeholder="Descrição da categoria"
							error={errors?.orcamentosCategorias?.[index]?.descricao}
							onChange={(e) => handleOrcamentoCategoriaChange(index, "descricao", e.target.value)}
							value={orcamentoCategoria.descricao}
						/>
					</div>
					<div className="col-md-2">
						<FormInput
							type="text"
							field={`orcamentosCategorias.${index}.valor`}
							label="Valor"
							placeholder="Valor da categoria"
							error={errors?.orcamentosCategorias?.[index]?.valor}
							onChange={(e) => handleOrcamentoCategoriaChange(index, "valor", e.target.value)}
							value={orcamentoCategoria.valor}
						/>
					</div>

					<div className="col-md-2">
						<button className="btn btn-secondary me-2 mt-3" type="button" onClick={() => removeOrcamentoCategoria(index)}>
							Remover Categoria
						</button>
					</div>
				</div>
			))}

			<div className="row" >

				<button className="btn btn-primary mt-3" type="button" onClick={addOrcamentoCategoria}>
					Adicionar Categoria
				</button>

				<FormButtons cancelTarget="/orcamentos" />
			</div>
		</form>
	)
}

export default Form