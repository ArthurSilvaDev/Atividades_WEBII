import Card from './Card'

const Cards = props => 
    <>
       {props.lista.length > 0 ?
        props.lista.map(estudante => <Card nome={estudante.nome} descricao={estudante.descricao} />)
        : <p style={{fontSize: '10px', color:'red'}}>Não há estudantes cadastrados.</p>
    } 
    </>

export default Cards