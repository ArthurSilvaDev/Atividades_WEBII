import Card from './Card'
import './Cards.css'
import Message from './Message'
import {useState} from 'react'

const Cards = ({nomeCurso, lista, removeEstudante}) => {
    const [msgConfirmDelete, setMsgConfirmDelete] = useState(false)
    const showDeleteMessage = () => {
        setMsgConfirmDelete(true)
        setTimeout(() => {setMsgConfirmDelete(false)}, 2000)
    }
    return(
        <>
        <h3>{nomeCurso}</h3>
        {lista.length > 0 ?
            lista.map((estudante) => <Card nome={estudante.nome} descricao={estudante.descricao} removeEstudante={removeEstudante} id={estudante.id} key={estudante.id} showDeleteMessage={showDeleteMessage}/>)
         : <p className='vazio'>Não há estudantes cadastrados.</p>}
         {msgConfirmDelete ? <Message className="warning">Estudante removido!</Message> : null} 
        </>
    )
} 
    

export default Cards