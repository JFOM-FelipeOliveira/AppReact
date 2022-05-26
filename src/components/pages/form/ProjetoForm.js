import './ProjetoForm.css'
import Input from './input';
import Select from './select';
import ButtonSubmit from './submitButton';
import { useEffect, useState } from 'react'



function ProjetoForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([])
    const [projetos, setProjetos] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projetos)
    }

    function handleChange(e){
        setProjetos({...projetos, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProjetos({...projetos, 
            categories: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(
        <form onSubmit={submit}>
            <Input 
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do seu projeto"
            handleOnChange={handleChange}
            value={projetos.name}
            />
            <Input 
            type="number"
            text="Orçamento"
            name="numero" 
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange}
            value={projetos.budget}
            />
            <Select 
            name="category_id"
            text="Selecione a categoria"
            options={categories}
            handleOnChange={handleCategory}
            value={projetos.category}
            />
            <ButtonSubmit 
            text={btnText}
            />
        </form>
    )
}

export default ProjetoForm;