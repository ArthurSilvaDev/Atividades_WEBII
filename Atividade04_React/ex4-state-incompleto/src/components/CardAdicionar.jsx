import {useState} from 'react'
import './CardAdicionar.css'
import FormAdicionar from './FormAdicionar'
import Message from './Message'

const CardAdicionar = ({addEstudante}) => {
    const [adicionar, setAdicionar] = useState(false)
    const [msgConfirmAdd, setMsgConfirmAdd] = useState(false)

const toggleForm = () => {
    setAdicionar(!adicionar)
}

const showConfirmMessage = () => {
   setMsgConfirmAdd(true)
   setTimeout(() => {setMsgConfirmAdd(false)}, 2000)
}

    return(
        <>
        <button id="toggleButton" onClick={toggleForm}>{adicionar ? 'Fechar formulário' : 'Adicionar novo estudante'}</button>
        {adicionar ? <FormAdicionar addEstudante={addEstudante} toggleForm={toggleForm} showConfirmMessage={showConfirmMessage}/> : null}
        {msgConfirmAdd ? <Message className="success">Estudante adicionado com sucesso!</Message> : null}
        </>
    )
}

export default CardAdicionar