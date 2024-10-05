import Player from './components/Player.jsx'
import TimeChallenge from './components/TimeChallenge.jsx'

function App() {

  return (
    <>
      <Player />
      <div id='challenges'>
      <TimeChallenge title =  "Fácil" targetTime = {1} />
      <TimeChallenge title =  "Difícil" targetTime = {5} />

      </div>
      
    </>
  )
}

export default App
