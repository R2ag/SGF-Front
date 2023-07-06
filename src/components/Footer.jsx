import { useContext } from "react";
import AppContext from "./AppContext";

const Footer = () => {
  const { tema, } = useContext(AppContext);
  return (
    <>
      <footer className={` bg-body-tertiary ${tema === "dark" ? "text-light" : "text-dark"} text-center p-3`}>
        Copyright &copy; SGF - Gestão financeira 2023 <br />
        Todos os direitos reservados.
      </footer>
    </>
  )
}

export default Footer