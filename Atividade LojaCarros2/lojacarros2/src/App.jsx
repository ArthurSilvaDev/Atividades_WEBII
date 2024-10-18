/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import CarForm from './components/Carform'
import Tabs  from   './components/Tabs'
import Cards from './components/Cards'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [carros, setCarros] = useState([])

  const venda = [
    {
      estado: 'Vendido'
    },
    {
      estado: 'Disponivel'
    }
  ]

  const [listaSelecionada, setListaSelecionada] = useState ('Disponivel')

  const changeListaSelecionada = estado => {
    setListaSelecionada(estado)
  }

  const addCarro = (carro, disponibilidade = 'Disponivel') => {
    setCarros([...carros, { ...carro, estado: disponibilidade}]);
};


  const removerCarro = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

  const venderCarro = (id, comprador) => {
    setCarros(carros.map((carro) => {
        if (carro.id === id) {
            return { ...carro, estado: 'Vendido', compNome: comprador.nome, compCPF: comprador.cpf };
        }
        return carro;
    }));
};


  return(
    <div className='App'>

      <h1>Concessionária - Estoque de Carros</h1>

      <Tabs venda = {venda} listaSelecionada = {listaSelecionada} changeListaSelecionada={changeListaSelecionada} ></Tabs>

      <Cards carros={carros.filter(carro => carro.estado == listaSelecionada)} venderCarro ={venderCarro} removerCarro={removerCarro}></Cards>


      <CarForm addCarro={addCarro} />

    </div>

  )
}

export default App
