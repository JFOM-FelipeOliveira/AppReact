import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contatos from './components/pages/Contatos';
import Empresa from './components/pages/Empresa';
import NovosProjetos from './components/pages/NovosProjetos';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App(){


  return(
    <>
      <Router>
        <Navbar>
          <Link to='/'> Home </Link>
          <Link to='/Contatos'> Contatos </Link>
          <Link to='/Empresa'> Empresa </Link>
          <Link to='/NovosProjetos'> Novos Projetos </Link>
        </Navbar>
        <div className='layout'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Contatos" element={<Contatos />} />
            <Route exact path="/Empresa" element={<Empresa />} />
            <Route exact path="/NovosProjetos" element={<NovosProjetos />} />
          </Routes>
        </div>
      </Router>
      <Footer>

      </Footer>
    </>
  )
}
export default App;