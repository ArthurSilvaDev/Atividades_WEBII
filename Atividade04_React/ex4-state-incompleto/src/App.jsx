import logo from './img/logoIF.jpg';
import './App.css';
import Cards from './Cards'
import { useState } from 'react'
import CardAdicionar from './CardAdicionar'

function App() {

  const [estudantes, setEstudantes] = useState([])
  const addEstudante = (estudante) =>{
    setEstudantes([...estudantes, estudante])
  }

  const removeEstudante = nome =>{
    setEstudantes(estudantes.filter(estudante => estudante.nome !== nome))
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://ifrs.edu.br" target="_blank"><img src={logo} alt="logo" className="App-logo"/></a>

        <p>Estudantes:</p>
        <Cards lista={estudantes} removeEstudante ={removeEstudante}/>
        
        <p>Adicionar novo estudante:</p>
        <CardAdicionar addEstudante={addEstudante}/>

      </header>
    </div>
  );
}

export default App;
