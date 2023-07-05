import { useState } from 'react';
import axios from 'axios';

const Relatorio6 = () => {
  const [dadosRelatorio, setDadosRelatorio] = useState([]);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/transacoes/listByCategoriaEPeriodo/${dataInicial}/${dataFinal}`);
      setDadosRelatorio(response.data);
    } catch (error) {
      console.error('Erro ao carregar dados do relatório:', error);
    }
  };

  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  return (
    <div className="relatorio-container">
      <h2 className="relatorio-title">Relatório de Soma de Valores de Categoria por Período</h2>
      <hr className="relatorio-line" />
      <form onSubmit={handleSubmit} className="relatorio-form">
        <table className="relatorio-form-table">
          <tbody>
            <tr>
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
            <th>Conta</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {dadosRelatorio.map((item) => (
            <tr key={item.Conta}>
              <td>{item.Conta}</td>
              <td>{item.Valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio6;
