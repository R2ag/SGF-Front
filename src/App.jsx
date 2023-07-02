import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';

import AppContext from "./components/AppContext";
import Home from './pages/Home';
import Layout from './pages/Layout';
import ListagemCategoria from './pages/categoria/Listagem';
import CadastroCategoria from './pages/categoria/Cadastro';
import AlteracaoCategoria from './pages/categoria/Alteracao';
import ExclusaoCategoria from './pages/categoria/Exclusao';

function App() {
  const [tema, setTema] = useState("light");

  axios.defaults.baseURL = "https://sgf-back.onrender.com";

  return (
    <div data-bs-theme={tema} >
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='categorias'>
                <Route index element={<ListagemCategoria />} />
                <Route path='cadastrar' element={<CadastroCategoria />} />
                <Route path='alterar/:id' element={<AlteracaoCategoria />} />
                <Route path='excluir/:id' element={<ExclusaoCategoria />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
