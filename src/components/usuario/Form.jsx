/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
	return (
		<form onSubmit={handleSubmit} noValidate autoComplete="off">
			<FormInput type="text" field="nome" label="Nome" placeholder="João de Deus" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
			<FormInput type="text" field="cpf" label="CPF" placeholder="111.111.111-11" error={errors?.cpf} onChange={handleChange} value={inputs?.cpf} />
			<FormInput type="text" field="email" label="Email" placeholder="joao@mail.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
			<FormInput type="text" field="usuario" label="Usuário" placeholder="Joao23" error={errors?.usuario} onChange={handleChange} value={inputs?.usuario} />
			<FormInput type="password" field="senha" label="Senha" error={errors?.senha} onChange={handleChange} value={inputs?.senha} /> 
			<FormButtons cancelTarget="/login" />
		</form>
	)
}

export default Form