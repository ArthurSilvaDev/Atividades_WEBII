import CarCard from './CarCard';
import './CarCard.css';

const CarCards = ({ carros, venderCarro, removerCarro, carrosVendidos }) => {
    return (
        <div className='carCards'>
            {carros.length > 0 ? (
                carros.map((carro) => (
                    <CarCard 
                        key={carro.id} 
                        carro={carro} 
                        venderCarro={venderCarro} 
                        removerCarro={removerCarro}
                        carrosVendidos={carrosVendidos} 
                    />
                ))
            ) : (
                <p>Nenhum carro disponível</p>
            )}
        </div>
    );
};

export default CarCards;