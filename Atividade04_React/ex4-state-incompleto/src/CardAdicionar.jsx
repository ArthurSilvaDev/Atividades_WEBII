import { useState } from "react";
import './CardAdicionar.css'



const CardAdicionar = (props) => {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')

    const handleInputNomeChange = e =>{
        setInputNome(e.target.value)
    }
    const handleInputDescricaoChange = e =>{
        setInputDescricao(e.target.value)
    }


    return (
        <div className="cardAdicionar">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" size="50" value={inputNome} onChange={handleInputNomeChange}/> <br/>

            <label htmlFor="descricao">Descricão:</label>
            <textarea name="descricao" id="descricao" cols="58" rows="5" value={inputDescricao} onChange={handleInputDescricaoChange}/>

            <br/>
            <button onClick={() => {props.addEstudante({
                nome: inputNome, descricao: inputDescricao
                })  
                setInputNome('')
                setInputDescricao('')
            }}>Adicionar</button>
        </div>
    )
}

export default CardAdicionar