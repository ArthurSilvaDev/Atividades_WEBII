import { useNavigate } from "react-router-dom"
import Nav from "./Nav"
import { useState } from "react"

const Pag2 = () => {
    const [inputDetalhe, setInputDetalhe] = useState('')

    const navigate = useNavigate()

    const handleInputDetalheChange = (e) =>{
        setInputDetalhe(e.target.value)
    }
    return(
        <>
            <h1>Pagina 2</h1>
            <input type="text" size='50' value={inputDetalhe} onChange={handleInputDetalheChange}/>
            <button onClick={() => {navigate(`/detalhe/${inputDetalhe}`)}}>Ver Detalhe</button>
        </>
    )
}

export default Pag2