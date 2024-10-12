
const Address = ({address})=>{
    let fullAdress = <h2> Procurando sua localização ...</h2>
    if (address){
        fullAdress = 
        <div>
            {address.amenity ? <h2>Você está localizado em: {address.amenity}</h2> : ''}
            <h2>Sua localização: </h2>
            <h3>{address.road}</h3>
        </div>
    }

    return(

        <>
            {fullAdress}
        </>
    )
}

export default Address