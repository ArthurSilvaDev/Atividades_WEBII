import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const url = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
  const handleClickerSearch = async () =>{
    const {data} = await axios.get(url)
    console.log(data.ticker.last)
  }

  return (
    <div className='App'>
      <h1>Dados: </h1>
      <button onClick={handleClickerSearch}>Pesquisar</button>
    </div>
      
  )
}

export default App
