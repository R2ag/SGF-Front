/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormInput type="text" field="nome" label="Nome" placeholder="João de Deus" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
			<FormInput type="text" field="ramo" label="Ramo do Favorecido" placeholder="Açougue" error={errors?.ramo} onChange={handleChange} value={inputs?.ramo} />
			<FormInput type="text" field="cpfOuCnpj" label="CPF/CNPJ" placeholder="111.111.111-11/11.111.111/0001-11" error={errors?.cpfOuCnpj} onChange={handleChange} value={inputs?.cpfOuCnpj} />
			<FormInput type="text" field="email" label="Email" placeholder="joao@mail.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
			<FormButtons cancelTarget="/favorecidos" />
		</form>
	)
}

export default Form