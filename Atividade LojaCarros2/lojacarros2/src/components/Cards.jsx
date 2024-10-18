/* eslint-disable react/prop-types */
import Card from './Card';
import './Card.css';

const Cards = ({ carros, venderCarro, removerCarro}) => {
    return (
        <div className='Cards'>
            {carros.length > 0 ? (
                carros.map((carro) => (
                    <Card 
                        key={carro.id} 
                        carro={carro} 
                        venderCarro={venderCarro} 
                        removerCarro={removerCarro}
                    />
                ))
            ) : (
                <p>Nenhum carro disponível</p>
            )}
        </div>
    );
};

export default Cards;