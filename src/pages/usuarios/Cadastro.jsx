import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { handleChange, validar } from '../../lib/FormUtils';
import validador from "../../lib/ValidadorUsuario";
import FormUsuario from "../../components/usuario/Form";

const Cadastro = () => {
  
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	function validarLocal(callbackAction){
		validar(callbackAction, inputs, setErrors, validador);
	}

	function handleChangeLocal(e){
		handleChange(e, setInputs, inputs);
	}

	function handleSubmit(e){
		e.preventDefault();
		validarLocal(() => {
			axios
				.post('/usuarios', inputs)
				.then((resp) =>{
					if(resp.status == 201){
						toast.success("Usuário inserido com suceso!");
						navigate('/usuarios')
					}
				});
		});
	}

	useEffect(() => {
		validarLocal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[inputs])

  return (
    <>
			<h1>Cadastro de usuarios</h1>
			<hr />
			<FormUsuario handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
		</>
  )
}

export default Cadastro