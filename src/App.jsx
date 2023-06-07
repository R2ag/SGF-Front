import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Login from './pages/Login';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cadastro" element={<NewUser />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
