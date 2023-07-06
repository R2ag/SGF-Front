import { useContext } from "react";
import AppContext from "./AppContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { tema, setTema } = useContext(AppContext);

  function handleTemaClick(e) {
    e.preventDefault();
    if (tema === "light") {
      setTema("dark");
    } else {
      setTema("light")
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/">
            <span className="fs-3"> 💰 </span>
            <span className="fs-3">SGF</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">Principal</NavLink>
              <NavLink to="/categorias" className="nav-link">Categorias</NavLink>
              <NavLink to="/contas" className="nav-link">Contas</NavLink>
              <NavLink to="/favorecidos" className="nav-link">Favorecidos</NavLink>
              <NavLink to="/orcamentos" className="nav-link">Orçamentos</NavLink>
              <NavLink to="/transacoes" className="nav-link">Transações</NavLink>
              <NavLink to="/relatorios" className="nav-link">Relatorios</NavLink>
              <NavLink to="/usuarios" className="nav-link">Usuários</NavLink>

              <a href="#" className="nav-link" onClick={handleTemaClick}>
                {tema === "dark" && (
                  <i className="bi bi-sun-fill" />
                )}
                {tema === "light" && (
                  <i className="bi bi-moon-fill" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;