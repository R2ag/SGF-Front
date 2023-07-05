import { useState } from "react";
import axios from 'axios';
import './estilos.css';

const Relatorio2 = () => {
    const [dadosRelatorio, setDadosRelatorio] = useState([]);
    const [idOrcamento, setIdOrcamento] = useState('');

    const carregarDadosRelatorio = async () => {
        try {
            const response = await axios.get(`/orcamentos/findGraficoOfValoresOrcadosETransacionadosByOrcamento/${idOrcamento}`);
            setDadosRelatorio(response.data);
        } catch (error) {
            console.error('Erro ao carregar dados do relatório:', error);
        }
    };

    const handleIdOrcamentoChange = (event) => {
        setIdOrcamento(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        carregarDadosRelatorio();
    };

    return (
        <div className="relatorio-container">
            <h2 className="relatorio-title">Comparação de Valores Orcados e Utilizados</h2>
            <hr className="relatorio-line" />
            <form onSubmit={handleSubmit} className="relatorio-form">
                <table className="relatorio-result-table">
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "20px" }}>
                                <label htmlFor="idOrcamento">ID do Orçamento:</label>
                            </td>
                            <td style={{ paddingLeft: "20px" }}>
                                <input
                                    type="text"
                                    id="idOrcamento"
                                    value={idOrcamento}
                                    onChange={handleIdOrcamentoChange}
                                />
                            </td>
                            <td style={{ paddingLeft: "20px" }}>
                                <button type="submit" className="btn btn-primary">
                                    Carregar Relatório
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <hr className="relatorio-line" />
            <table className="relatorio-result-table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Valor Orçado</th>
                        <th>Valor Utilizado</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosRelatorio.map((item) => (
                        <tr key={item.Categoria}>
                            <td>{item.Categoria}</td>
                            <td>{item["Valor Orçado"]}</td>
                            <td>{item["Valor Utilizado"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Relatorio2;
