import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount'


function App() {
  return (
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <ItemListContainer name="Productos Destacados"/>
      <ItemCount initial="1" stock="5" onAdd={(num)=>console.log(`Se agrego ${num} producto/s`)}/>
      <ItemDetailContainer item={1}/>
      </div>
    </div>
  );
}

export default App;
