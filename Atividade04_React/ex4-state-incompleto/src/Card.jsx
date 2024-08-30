import avatar from './img/avatar.png'

const Card = props => 
    <div >
        <img src={avatar} />
        <p>{props.nome}</p>
        <p>{props.descricao}</p>
    </div>

export default Card