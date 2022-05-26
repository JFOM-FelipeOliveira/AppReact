import {Link} from 'react-router-dom';
import './navbar.css';
import logo from './logo1.png';

function Navbar(){
    return(
        <nav className='navbar'>
            <Link to='/'> 
                <img src={logo} alt='logo'/>
            </Link>
            <ul className='list'>
                <li className='item' > <Link to='/'> Home </Link> </li>
                <li className='item' > <Link to='/Contatos'> Contatos </Link> </li>
                <li className='item' > <Link to='/Empresa'> Empresa </Link> </li>
                <li className='item' > <Link to='/NovosProjetos'> Novos Projetos </Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;