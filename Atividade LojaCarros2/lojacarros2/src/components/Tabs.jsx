/* eslint-disable react/prop-types */

import './Tabs.css'


const Tabs = ({venda, listaSelecionada, changeListaSelecionada}) =>{
    return(
        <ul>
        {venda.map(venda=> <li className={venda.estado === listaSelecionada ? 'selected' : undefined} key={venda.estado} onClick={()=> changeListaSelecionada(venda.estado)}>{venda.estado}</li>)}
    </ul>
    )
    
}
export default Tabs