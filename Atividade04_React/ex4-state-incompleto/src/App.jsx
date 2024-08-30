import logo from './img/logoIF.jpg';
import './App.css';
import Cards from './Cards'

function App() {
  const estudantesIniciais = [
    {
      nome: "João", 
      descricao: "Descrição de João -Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure officiis veniam magnam praesentium in est? Saepe deleniti voluptate aliquid, perspiciatis sequi iure temporibus sit odio? Rerum adipisci deserunt impedit?"
    },
    {
      nome: "Maria", 
      descricao: "Descrição de Maria -Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure officiis veniam magnam praesentium in est? Saepe deleniti voluptate aliquid, perspiciatis sequi iure temporibus sit odio? Rerum adipisci deserunt impedit?"
    },
    {
      nome: "Ana", 
      descricao: "Descrição de Ana -Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure officiis veniam magnam praesentium in est? Saepe deleniti voluptate aliquid, perspiciatis sequi iure temporibus sit odio? Rerum adipisci deserunt impedit?"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://ifrs.edu.br" target="_blank"><img src={logo} alt="logo" className="App-logo"/></a>

        <p>Estudantes:</p>
        <Cards lista={estudantesIniciais} />

      </header>
    </div>
  );
}

export default App;
