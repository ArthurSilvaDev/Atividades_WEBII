import { useNavigate, useParams } from "react-router-dom"

const Detalhe = () =>{

    const params =  useParams()
    const navigate = useNavigate()

    return(
        <>
        <h1>Foi recebido: {params.texto}</h1>
        <button onClick={() => {navigate(-1)}}>Voltar</button>
        <button onClick={() => {navigate('/')}}>Ir para Home</button>
        </>
    )
}

export default Detalhe