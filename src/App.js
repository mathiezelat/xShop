import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <ItemListContainer name="Productos Destacados"/>
      </div>
    </div>
  );
}

export default App;
