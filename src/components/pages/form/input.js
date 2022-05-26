import './ProjetoForm.css'

function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className="formControl">
            <label htmlFor={name}>{text}: </label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input;