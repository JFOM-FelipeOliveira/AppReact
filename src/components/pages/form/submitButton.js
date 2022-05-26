import './ProjetoForm.css'

function ButtonSubmit({ text}){
    return(
        <div className="formControl">
            <button>{text}</button>
        </div>
    )
}

export default ButtonSubmit;