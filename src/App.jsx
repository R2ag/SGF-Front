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
import ListagemRelatorio from './pages/relatorios/ListagemRelatorios';
import Relatorio1 from './pages/relatorios/Relatorio1';
import Relatorio2 from './pages/relatorios/Relatorio2';
import Relatorio3 from './pages/relatorios/Relatorio3';
import Relatorio4 from './pages/relatorios/Relatorio4';
import Relatorio5 from './pages/relatorios/Relatorio5';
import Relatorio6 from './pages/relatorios/Relatorio6';
import ListagemConta from './pages/conta/Listagem';
import AlteracaoConta from './pages/conta/Alteracao';
import CadastroConta from './pages/conta/Cadastro';
import ExclusaoConta from './pages/conta/Exclusao';
import ListagemFavorecido from './pages/favorecido/Listagem';
import CadastroFavorecido from './pages/favorecido/Cadastro';
import AlteracaoFavorecido from './pages/favorecido/Alteracao';
import ExclusaoFavorecido from './pages/favorecido/Exclusao';
import ListagemOrcamento from './pages/orcamento/Listagem';
import CadastroOrcamento from './pages/orcamento/Cadastro';
import AlteracaoOrcamento from './pages/orcamento/Alteracao';
import ExclusaoOrcamento from './pages/orcamento/Exclusao';
import ListagemUsuario from './pages/usuarios/Listagem';
import CadastroUsuario from './pages/usuarios/Cadastro';
import AlteracaoUsuario from './pages/usuarios/Alteracao';
import ExclusaoUsuario from './pages/usuarios/Exclusao';

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
              <Route path='contas'>
                <Route index element={<ListagemConta />} />
                <Route path='cadastrar' element={<CadastroConta />} />
                <Route path='alterar/:id' element={<AlteracaoConta />} />
                <Route path='excluir/:id' element={<ExclusaoConta />} />
              </Route>
              <Route path='favorecidos'>
                <Route index element={<ListagemFavorecido />} />
                <Route path='cadastrar' element={<CadastroFavorecido />} />
                <Route path='alterar/:id' element={<AlteracaoFavorecido />} />
                <Route path='excluir/:id' element={<ExclusaoFavorecido />} />
              </Route>
              <Route path='orcamentos'>
                <Route index element={<ListagemOrcamento />} />
                <Route path='cadastrar' element={<CadastroOrcamento />} />
                <Route path='alterar/:id' element={<AlteracaoOrcamento />} />
                <Route path='excluir/:id' element={<ExclusaoOrcamento />} />
              </Route>
              <Route path='usuarios'>
                <Route index element={<ListagemUsuario />} />
                <Route path='cadastrar' element={<CadastroUsuario />} />
                <Route path='alterar/:id' element={<AlteracaoUsuario />} />
                <Route path='excluir/:id' element={<ExclusaoUsuario />} />
              </Route>
              <Route path='relatorios'>
                <Route index element={<ListagemRelatorio />} />
                <Route path='/relatorios/1' element={<Relatorio1 />} />
                <Route path='/relatorios/2' element={<Relatorio2 />} />
                <Route path='/relatorios/3' element={<Relatorio3 />} />
                <Route path='/relatorios/4' element={<Relatorio4 />} />
                <Route path='/relatorios/5' element={<Relatorio5 />} />
                <Route path='/relatorios/6' element={<Relatorio6 />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
