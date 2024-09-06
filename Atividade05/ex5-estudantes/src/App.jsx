/* eslint-disable no-unused-vars */
import logo from './img/logoIF.jpg';
import './App.css';
import Cards from './components/Cards'
import { useState } from 'react'
import CardAdicionar from './components/CardAdicionar'
import Tabs from './components/Tabs'

function App() {

  const [estudantes, setEstudantes] = useState([])
  const [cursos, setCursos] = useState([
    {sigla: 'ADS',
      nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    },
    {
      sigla: 'TPG',
      nome: 'Tecnologia em Processos Gerenciais'
    },
    {
      sigla: 'MAT',
      nome: 'Licenciatura em Matemática'
    },
    {
      sigla: 'LET',
      nome: 'Licenciatura em Letras'
    }
  ])
  const [cursoSelecionado, setCursoSelecionado] = useState('ADS')

  const changeCursoSelecionado = (curso) =>{
    setCursoSelecionado(curso)
  }

  const addEstudante = (estudante) =>{
    setEstudantes([...estudantes, estudante])
  }

  const removeEstudante = nome =>{
    setEstudantes(estudantes.filter(estudante => estudante.nome !== nome))
  }
  

  return (
    <div className="App">

        <a href="https://ifrs.edu.br" target="_blank"><img src={logo} alt="logo" className="App-logo"/></a>

        <h2>Estudantes:</h2>

        <Tabs cursos={cursos} selecionarCurso={changeCursoSelecionado} selecionado={cursoSelecionado}/>
        <Cards lista={estudantes} removeEstudante ={removeEstudante}/>
        
        <p>Adicionar novo estudante:</p>
        <CardAdicionar addEstudante={addEstudante}/>
    </div>
  );
}

export default App;
