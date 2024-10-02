/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Carform.css';

function CarForm({ addCarro }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
      id: Date.now(),
      marca,
      modelo,
      ano,
      cor,
    };
    addCarro(newCar);
    setMarca('');
    setModelo('');
    setAno('');
    setCor('');
  };

  return (
    <div className='formAdicionar'>
      <h1>Adicionar carro</h1>
      <form >
        <label>
          <br />Marca:
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        </label>
        <label>
          Modelo:
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
        </label>
        <label>
          <br />Ano:
          <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} required />
        </label>
        <label>
          Cor:
          <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} required />
        </label>
        <br /><button type="submit" className='button-adicionarCarro' onClick={handleSubmit}>Adicionar Carro</button>
    </form>

    </div>
    
  );
}

export default CarForm;