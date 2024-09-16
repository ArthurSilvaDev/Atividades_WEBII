import avatar from '../img/avatar.png'
import './Card.css'
import {useState} from 'react'

const Card = ({id, nome, descricao, removeEstudante, showDeleteMessage}) => {
    const [apagar, setApagar] = useState(false)
    return(
        <div className={apagar ? 'card cardApagar' : 'card'}>
        <img src={avatar} />
        <p className="nome">{nome}</p>
        <p>{descricao}</p>
        {apagar ?
            <div>
                <span className="spanRemover">Tem certeza que deseja remover o estudante?</span>
                <button className="buttonConfirmRemover" onClick={() => {removeEstudante(id); showDeleteMessage()}}>Remover</button>
                <button onClick={() => setApagar(false)}>Cancelar</button>
            </div>
           :<button className="buttonRemover" onClick={() => setApagar(true)}>Remover</button>
        }
    </div>
    )
}
    
export default Card