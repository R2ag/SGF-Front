import * as yup from 'yup';

const validador = yup.object().shape({
    nome: yup.string().required("A conta deve possuir um nome.").min(2, "O nome da conta deve ter no mínimo 2 caracteres").max(30, "O nome da conta deve ter no máximo 30 caracteres"),
    tipo: yup.string().min(2, "O tipo deve ter no mínimo 2 caracteres").max(20, "O tipo deve ter no máximo 20 caracteres."),
    descricao: yup.string().max(50, "A descrição deve ter no máximo 50 caracteres."),
    saldo: yup.number(),
    usuarioId: yup.number().integer().required(),
});

export default validador;