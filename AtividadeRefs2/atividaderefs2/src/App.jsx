import { useState} from "react"
import Input from "./components/Input.jsx"
import { useRef } from "react"

const userData = {
  name: "",
  email: ""
}

function App() {

  const name = useRef()
  const email = useRef()

  function handleSaveData(){
    const enteredName = name.current.value
    const enteredEmail = email.current.value

    userData.name = enteredName
    userData.email = enteredEmail

    console.log(userData)
  }

  return (
   <div>
    <Input type="text" label="Seu nome" ref = {name} />
    <Input type="text" label="Seu email" ref = {email} />
    <p id="actions">
      <button onClick={handleSaveData}> Salvar Dados</button>
    </p>
   </div>
  )
}

export default App
