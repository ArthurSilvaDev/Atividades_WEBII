import { useRef, useState } from "react"

const Player = () => {
    const inputName = useRef()
    
    const[name, setName] = useState('')

    const handleClick = () => {
            setName(inputName.current.value)
    }


    const handleKeyup = (event) =>{
        if(event.key == 'Enter'){
            handleClick();
        }
    }
        

    return (
        <section id="player">
            <h2>Bem vindo { name ? name : "Desconhecido"}</h2>

            <p>
                <input ref={inputName} type="text" onKeyUp={handleKeyup} />
                <button onClick={handleClick}>Definir nome</button>
            </p>
        </section>

    )
}

export default Player