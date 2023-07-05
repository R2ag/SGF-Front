import { useState } from 'react';
import axios from 'axios';

const Relatorio5 = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [idFavorecido, setIdFavorecido] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/transacoes/fyndByFavorecidoEPeriodo/${idFavorecido}/${dataInicial}/${dataFinal}`);
      setTransacoes(response.data);
    } catch (error) {
      console.error('Erro ao carregar transações por favorecido e período:', error);
    }
  };

  const handleIdFavorecidoChange = (event) => {
    setIdFavorecido(event.target.value);
  };

  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  return (
    <div className="relatorio-container">
      <h2 className="relatorio-title">Listar transações por favorecido e período</h2>
      <hr className="relatorio-line" />
      <form onSubmit={handleSubmit} className="relatorio-form">
        <table className="relatorio-form-table">
          <tbody>
            <tr>
              <td style={{ paddingLeft: "20px" }}>
                <label htmlFor="idFavorecido">ID do Favorecido:</label>
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <input
                  type="text"
                  id="idFavorecido"
                  value={idFavorecido}
                  onChange={handleIdFavorecidoChange}
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
            <th>Data</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Conta</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao) => (
            <tr key={transacao.id}>
              <td>{transacao.Data}</td>
              <td>{transacao.Valor}</td>
              <td>{transacao.Categoria}</td>
              <td>{transacao.Conta}</td>
              <td>{transacao.Descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio5;
