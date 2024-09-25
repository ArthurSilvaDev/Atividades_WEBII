/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Tabs = ({abas, abaSelecionada, setAbaSelecionada}) => 
    <ul>
        {abas.map(aba => <li className={aba == abaSelecionada ? 'selected' : undefined} key={aba} onClick={() => setAbaSelecionada(aba)}>{aba}</li>)}
    </ul>

export default Tabs