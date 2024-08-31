import avatar from './img/avatar2.jfif'
import './Card.css'

const Card = props => 
    <div className="card" >
        <img src={avatar} />
        <p className='nome'>{props.nome}</p>
        <p>{props.descricao}</p>
    </div>


export default Card