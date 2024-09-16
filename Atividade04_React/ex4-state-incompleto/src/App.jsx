import logo from './img/logoIF.jpg'
import './App.css'
import Cards from './components/Cards'
import CardAdicionar from './components/CardAdicionar'
import {useState} from 'react'
import Tabs from './components/Tabs'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [estudantes, setEstudantes] = useState([])
  const cursos = [
    {
      sigla: 'ADS',
      nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
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
  ]
  const [cursoSelecionado, setCursoSelecionado] = useState("ADS")

  const changeCursoSelecionado = curso => {
    setCursoSelecionado(curso)
  }

  const addEstudante = estudante => {
    setEstudantes([...estudantes, {...estudante, curso: cursoSelecionado, id: uuidv4()}])
  }
  const removeEstudante = id => {
    setEstudantes(estudantes.filter((estudante) => estudante.id != id))
  }
  return (
    <div className="App">
      
        <a href="https://ifrs.edu.br" target="_blank"><img src={logo} alt="logo" className="App-logo"/></a>

        <h2>Estudantes</h2>

        <Tabs cursos={cursos} cursoSelecionado={cursoSelecionado} changeCursoSelecionado= {changeCursoSelecionado}/>

        <Cards nomeCurso={cursos.find(curso => curso.sigla == cursoSelecionado).nome} lista={estudantes.filter(estudante => estudante.curso == cursoSelecionado)} removeEstudante={removeEstudante}/>
    
        <CardAdicionar addEstudante={addEstudante}/>

    
    </div>
  );
}

export default App;
