import React from "react";
import CarCards from "./CarCards";
import { useState } from "react";
import './CarCards.css';


const CarList = ({carros, carrosVendidos, venderCarro, removerCarro}) => {
    const [listaAtual, setListaAtual] = useState('carrosDisponiveis');

    return (
        <div>
           <button onClick={() => {setListaAtual('carrosDisponiveis')} }>Carros disponíveis</button>
           <button onClick={() => {setListaAtual('carrosVendidos')}}>Carros vendidos</button>


            {listaAtual === 'carrosDisponiveis' ? <CarCards carros={carros} venderCarro={venderCarro} removerCarro={removerCarro} carrosVendidos={carrosVendidos} /> : <CarCards carros={carrosVendidos}  venderCarro={venderCarro} removerCarro={removerCarro}/> }

        </div>
    )
}

export default CarList