import React, { useState } from 'react';
import './Formulario.css'; // Certifique-se de que este caminho está correto

const Formulario = () => {
    const [inputValue, setInputValue] = useState(''); // Estado para armazenar o valor da caixa de texto
    const [submittedValue, setSubmittedValue] = useState(''); // Estado para armazenar o valor após o envio

    const handleChange = (event) => {
        setInputValue(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (inputValue.trim() === '') {
            alert('Email em branco. Favor informá-lo.'); 
            setSubmittedValue(''); 
        } else {
            setSubmittedValue(inputValue); 
            setInputValue(''); 
        }
    };

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit} className="">
                <label htmlFor="input">Email </label>
                <input 
                    type="text" 
                    id="input" 
                    value={inputValue} 
                    onChange={handleChange} 
                    className="input" 
                />
                <button type="submit" className="botao">Enviar</button>
            </form>
            {submittedValue && (
                <p className="input-preview">{submittedValue}</p> 
            )}
        </div>
    );
};

export default Formulario;
