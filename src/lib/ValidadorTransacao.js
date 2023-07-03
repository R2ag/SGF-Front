import * as yup from 'yup';

const validador = yup.object().shape({
    data: yup.date().required("A data deve ser preenchida.").typeError("A data deve ser preenchida no formato correto."),
    descricao: yup.string().max(50, "A descrição deve ter no máximo 50 caracteres."),
    valor: yup.number().test('valor', 'O valor deve ser negativo para transações do tipo débito.', function (value) {
        const tipoId = this.parent.tipoId; // Obtém o valor de tipoId do objeto sendo validado
        if (tipoId === 2 && value >= 0) {
            return this.createError({ message: 'O valor deve ser um número negativo.', path: 'valor' });
        }
        return true;
    }).required("O valor deve ser preenchido.").typeError("O valor deve ser preenchido com um valor decimal."),
    contaId: yup.number().integer().required("A conta utilizada na transação deve ser preenchida"),
    favorecidoId: yup.number().integer().required("O favorecido na Transação deve ser informado"),
    categoriaId: yup.number().integer().required("A categoria da transação deve ser informada"),
    tipoId: yup.number().integer().required("O tipo da transação deve ser informado")
});

export default validador;