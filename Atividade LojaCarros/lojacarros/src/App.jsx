/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import carro from './img/carro.jpg'
import  Tabs from './components/Tabs'

function App() {

  const [carros, setCarros] = useState([
    {marca: 'Fiat',
    modelo: 'Uno',
    ano:'2001',
    cor:'vermelho'
    }
  ])
  const abas = ['Carros a venda', 'Carros vendidos']

  const [abaSelecionada, setAbaSelecionada] = useState('Carros a venda')


  return (
    <div className='App'>
      <h1>Sistema de venda de carros</h1>
      
      <Tabs abas={abas} abaSelecionada={abaSelecionada} setAbaSelecionada={setAbaSelecionada}/>

    </div>
  )
}

export default App
