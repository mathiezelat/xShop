import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hola Mundo! </h1>
        <p>
          Próximamente xShop
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mathiezelat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
