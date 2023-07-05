import { useState } from "react";
import axios from 'axios';
import './estilos.css';

const Relatorio1 = () => {
  const [dadosRelatorio, setDadosRelatorio] = useState([]);
  const [idOrcamento, setIdOrcamento] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const carregarDadosRelatorio = async () => {
    try {
      const response = await axios.get(`/orcamentos/findGraficoOfDivisaoDoTotalOrcadoByOrcamento/${idOrcamento}/${dataInicial}/${dataFinal}`);
      setDadosRelatorio(response.data);
    } catch (error) {
      console.error('Erro ao carregar dados do relatório:', error);
    }
  };

  const handleIdOrcamentoChange = (event) => {
    setIdOrcamento(event.target.value);
  };

  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    carregarDadosRelatorio();
  };

  return (
    <div className="relatorio-container">
      <h2 className="relatorio-title">Divisão do total orçado</h2>
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
                <label htmlFor="dataInicial">Data Inicial:</label>
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <input
                  type="date"
                  id="dataInicial"
                  value={dataInicial}
                  onChange={handleDataInicialChange}
                />
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <label htmlFor="dataFinal">Data Final:</label>
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <input
                  type="date"
                  id="dataFinal"
                  value={dataFinal}
                  onChange={handleDataFinalChange}
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
            <th>Total Gasto</th>
          </tr>
        </thead>
        <tbody>
          {dadosRelatorio.map((item) => (
            <tr key={item.categoriaId}>
              <td>{item.Nome}</td>
              <td>{item.totalGasto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio1;
