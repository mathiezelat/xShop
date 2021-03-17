import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


function App() {
  return (
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <ItemListContainer name="Productos Destacados"/>
      <ItemCount initial="1" stock="5" onAdd={(num)=>console.log(`Se agrego ${num} producto/s`)}/>
      </div>
    </div>
  );
}

export default App;
