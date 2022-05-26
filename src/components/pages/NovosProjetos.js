import './estilos/NovosProjetos.css'
import ProjetoForm from './form/ProjetoForm';
import {useNavigate} from 'react-router-dom'

function NovosProjetos(){

    const navigate = useNavigate()

    function creatPost(projetos){
        projetos.cost = 0
        projetos.services = []
        fetch('http://localhost:5000/projetos', {
        method: 'POST',
        headers: {'content-type': 'application/json',},
        body: JSON.stringify(projetos),
        })
        .then((resp => resp.json())
        .then((data) => {
            console.log(data)
            navigate(('/projetos', { message: 'Projeto criado com suceso'}))
            })
        ).catch(err => console.log(err))
    }

    return (
        <div className="novoProjeto">
            <h1> Criar Projeto</h1>
            <p> Crie seu projeto para gerencia-lo </p>
            <ProjetoForm handleSubmit={creatPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NovosProjetos;