import carroImg from '../img/carro.jpg';
import './CarCard.css';
import { useState } from 'react';

const CarCard =({carro, venderCarro, removerCarro, carrosVendidos}) =>{

    const [comprador, setComprador] = useState({nome: '', cpf: ''});
    const [showForm, setShowForm] = useState(false);

    const handleVender = () =>{
        if (comprador.nome && comprador.cpf){
            venderCarro(carro.id, comprador);
            setComprador({nome: '', cpf: ''});
            setShowForm(false);
        }
    }

    return(
        <div className='CarCard'>
            <img src={carroImg} className='imgCarro'/>
            <p>Marca do veiculo: {carro.marca}</p>
            <p>Modelo do veiculo: {carro.modelo}</p>
            <p>Ano do veiculo: {carro.ano}</p>
            <p>Cor do veiculo: {carro.cor}</p>

            
            <button onClick={() =>removerCarro(carro.id)}>Remover</button>

                <button onClick={() =>setShowForm(!showForm)}>Vender</button>

                {showForm && (
                    <div>
                        <input 
                            type="text" 
                            placeholder="Nome do Comprador" 
                            value={comprador.nome} 
                            onChange={(e) => setComprador({ ...comprador, nome: e.target.value })} 
                        />
                        <input 
                            type="text" 
                            placeholder="CPF do Comprador" 
                            value={comprador.cpf} 
                            onChange={(e) => setComprador({ ...comprador, cpf: e.target.value })} 
                        />
                        <button onClick={handleVender}>Confirmar Venda</button>
                    </div>
                )}
            


        </div>
    )
}

export default CarCard