import { Link } from "react-router-dom";

const ListagemRelatorios = () => {
  const relatorios = [
    "Divisao do total orçado",
    "Comparação de Valores Orcados e Utilizados",
    "Listar transações por categoria e período",
    "Listar transações por conta e período",
    "Listar transações por favorecido e período",
    "Relatório de Soma de Valores de Categoria por Período"
  ];

  return (
    <>
      <h1>Relatórios</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Nome do Relatório</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio, index) => (
            <tr key={index}>
              <td>{relatorio}</td>
              <td>
                <Link to={`/relatorios/${index + 1}`} className="btn btn-primary">Exibir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListagemRelatorios;