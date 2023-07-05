import { useState } from 'react';
import axios from 'axios';
import './estilos.css';

const Relatorio3 = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [idCategoria, setIdCategoria] = useState('');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.get(`/transacoes/fyndByCategoriaEPeriodo/${idCategoria}/${dataInicial}/${dataFinal}`);
      setTransacoes(response.data);
    } catch (error) {
      console.error('Erro ao carregar transações por categoria e período:', error);
    }
  };

  const handleIdCategoriaChange = (event) => {
    setIdCategoria(event.target.value);
  };

  const handleDataInicialChange = (event) => {
    setDataInicial(event.target.value);
  };

  const handleDataFinalChange = (event) => {
    setDataFinal(event.target.value);
  };

  return (
    <div className="relatorio-container">
      <h2 className="relatorio-title">Listar transações por categoria e período</h2>
      <hr className="relatorio-line" />
      <form onSubmit={handleSubmit} className="relatorio-form">
        <table className="relatorio-form-table">
          <tbody>
            <tr>
              <td style={{ paddingLeft: "20px" }}>
                <label htmlFor="idCategoria">ID da Categoria:</label>
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <input
                  type="text"
                  id="idCategoria"
                  value={idCategoria}
                  onChange={handleIdCategoriaChange}
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
            <th>Conta</th>
            <th>Favorecido</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao) => (
            <tr key={transacao.id}>
              <td>{transacao.Data}</td>
              <td>{transacao.Valor}</td>
              <td>{transacao.Conta}</td>
              <td>{transacao.Favorecido}</td>
              <td>{transacao.Descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio3;
