import * as yup from "yup";

const validador = yup.object().shape({
    nome: yup.string().required().min(2).max(50),
    // eslint-disable-next-line no-useless-escape
    cpf: yup.string().required().matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/),
    email: yup.string().email().required(),
    usuario: yup.string().required(),
    senha: yup.string().required()
});

export default validador;