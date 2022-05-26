import projetoslogo from './projetoslogo.png';
import './estilos/home.css';
import {Link} from 'react-router-dom';

function Home(){
    return (
    <section className='home'>
        <h1>Bem-vindo ao Nossos Projetos!</h1>
        <p> Comece a gerenciar seus projetos 
            para alcançar melhores resultados. </p>
            <ul><li> <Link to='/NovosProjetos'> Novo Projeto </Link> </li></ul>
        <img src={projetoslogo} alt="Logo"></img>
    </section>
    )
}

export default Home;