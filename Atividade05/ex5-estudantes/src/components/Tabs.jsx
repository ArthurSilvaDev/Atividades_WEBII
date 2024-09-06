/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Tabs.css'


const Tabs = ({cursos, selecionarCurso, selecionado}) => 
    <ul>
        {cursos.map(curso => <li className={curso.sigla== selecionado ? 'selected' : ''} onClick={() => selecionarCurso(curso.sigla)} key ={curso.sigla}>{curso.sigla}</li>)}
    </ul>


export default Tabs