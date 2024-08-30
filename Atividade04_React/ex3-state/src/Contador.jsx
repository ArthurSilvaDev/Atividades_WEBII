import {useState} from 'react'

const Contador = () => {
    const [count, setCount] = useState(0)
    const [buttonText, setButtonText] = useState("Clique aqui pela primeira vez")

    return(
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => {setCount(count + 1);  setButtonText("Clique Aqui mais vezes")}}>{buttonText}</button>
        </div>
    )
}

export default Contador