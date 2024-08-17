import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome nome ="Bruno"/>
      </header>
    </div>
  );
}

export default App;
