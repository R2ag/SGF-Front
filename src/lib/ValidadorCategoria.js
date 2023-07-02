import * as yup from "yup";

const validador = yup.object().shape({
    nome: yup.string().required("O nome da categoria deve ser preenchido!").min(2, "O nome da categoria deve ter no mínimo 2 caracteres").max(30, "O nome da categoria deve ter no máximo 30 caracteres"),
    descricao: yup.string().max(50, "A descrição deve ter no máximo 50 caracteres."),
    observacao: yup.string().max(50, "A observação deve ter no máximo 50 caracteres."),
    tipoId: yup.number().integer().required()
});

export default validador;