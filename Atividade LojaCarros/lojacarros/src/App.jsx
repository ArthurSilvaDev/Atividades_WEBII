import { useState } from 'react';
import './App.css';
import CarForm from './components/CarForm';
import CarCards from './components/CarCards';
import CarList from './components/CarList';


function App() {
  const [carros, setCarros] = useState([
    {
      id: 1,
      marca: 'Chevrolet',
      modelo: 'Celta',
      ano: 2020,
      cor: 'Preto',
    }
  ]);
  const [carrosVendidos, setCarrosVendidos] = useState([
    {
      id: 11,
      marca: 'Fiat',
      modelo: 'Palio',
      ano: 2000,
      cor: 'Azul',
      nomeComprador: 'Jonas',
      cpfComprador: '123.456.789-10',
    }
  ]);

  const addCarro = (carro) => {
    setCarros([...carros, carro]);
  };


  const removerCarro = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

  const venderCarro = (id, comprador) => {
    const carroVendido = carros.find((carro) => carro.id === id);
    setCarrosVendidos([...carrosVendidos, { ...carroVendido, comprador }]);
    removerCarro(id);
  };

  const [listaSelecionada, setListaSelecionada] = useState('');

  const changeListaSelecionada = (lista) => {
    setListaSelecionada(lista);
  };

  return (
    <div className="App">
      <h1>Concessionária - Estoque de Carros</h1>

      <CarList venderCarro={venderCarro} removerCarro={removerCarro} carrosVendidos={carrosVendidos} carros={carros} ListaSelecionada={listaSelecionada} />
  
      <CarForm addCarro={addCarro} />
      
    </div>
  );
}

export default App;
