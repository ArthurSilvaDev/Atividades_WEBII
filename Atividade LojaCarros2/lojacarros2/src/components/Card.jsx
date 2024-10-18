/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import carroImg from '../img/carro.jpg';
import './Card.css';
import { useState } from 'react';

const CarCard =({carro, venderCarro, removerCarro}) =>{

    const [comprador, setComprador] = useState({nome: '', cpf: ''});
    const [showForm, setShowForm] = useState(false);
    const [confirmarDel, setConfirmarDel] = useState (false)

    const handleVender = () =>{
        if (comprador.nome && comprador.cpf){
            venderCarro(carro.id, comprador);
            setComprador({nome: '', cpf: ''});
            setShowForm(false);
        }
    }

    return(
        <div className='Card'>
        <img src={carroImg} className='imgCarro' alt='Imagem do carro' />
        <p>Marca do veículo: {carro.marca}</p>
        <p>Modelo do veículo: {carro.modelo}</p>
        <p>Ano do veículo: {carro.ano}</p>
        <p>Cor do veículo: {carro.cor}</p>

        

        {carro.estado === 'Vendido' ? (
            <>
                <p><strong>Comprador:</strong> {carro.compNome}</p>
                <p><strong>CPF do Comprador:</strong> {carro.compCPF}</p>
            </>
        ) : (
            <>
                
                <button onClick={() => setShowForm(!showForm)}>Vender</button>

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
            </>
        )}
        <button onClick={() => setConfirmarDel(!confirmarDel)}>Remover</button>
        {
            confirmarDel &&(
                <div>
                    <p>Você quer realmente remover este carro?</p>
                    <button onClick={() => removerCarro(carro.id)}>Confirmar Remoção</button>
                </div>
            )
        }
        

    </div>
    );
};

export default CarCard