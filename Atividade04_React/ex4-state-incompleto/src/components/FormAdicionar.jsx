import {useState} from 'react'
import './FormAdicionar.css'
import Message from './Message'

const FormAdicionar = ({addEstudante, toggleForm, showConfirmMessage}) => {
    const [inputNome, setInputNome] = useState("")
    const [inputDescricao, setInputDescricao] = useState("")
    const [msgIncompleteForm, setMsgIncompleteForm] = useState(false)

    const handleInputNomeChange = e => {
        setInputNome(e.target.value)
    }

    const handleInputDescricaoChange = e => {
        setInputDescricao(e.target.value)
    }

    const showIncompleteFormMessage = () => {
        setMsgIncompleteForm(true)
        setTimeout(() => {setMsgIncompleteForm(false)}, 2000)
    }
    return(
        <div className="formAdicionar">
        <p>Adicionar novo estudante</p>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" size="80" value={inputNome} onChange={handleInputNomeChange}/><br />

        <label htmlFor="descricao">Descricao:</label>
        <textarea name="descricao" id="descricao" cols="75" rows="5" value={inputDescricao} onChange={handleInputDescricaoChange}/>

        <button id="addButton" onClick={() => {
            if (inputNome && inputDescricao) {
                addEstudante({nome: inputNome, descricao: inputDescricao})
                setInputNome("")
                setInputDescricao("")
                toggleForm()
                showConfirmMessage()
            } else {
                showIncompleteFormMessage()
            }
        }}>Adicionar</button>
        {msgIncompleteForm ? <Message className="failure">Preencha todos os campos do formulário</Message> : null}
    </div>
    )
}
   
export default FormAdicionar