const Lista = (props) => {
    const {titulo, elementos} = props
    return(
    <>
        <h3>{titulo}</h3>
            <ul>   
            { elementos ? 
            elementos.map((elemento) => 
            <li>{elemento}</li>) 
            : <li>Lista vazia</li>}
            </ul>
    </>
    )
}

export default Lista