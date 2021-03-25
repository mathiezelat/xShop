import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';

const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer name="Productos Destacados"/>
        </Route>

        <Route path='/category/:categoryId'>
          <ItemListContainer name="Productos"/>
        </Route>

        <Route path='/item/:itemId'>
          <ItemDetailContainer />
        </Route>

        <Route path='*'>
          <Error404/>
        </Route>
      </Switch>
      {/* <ItemCount initial="1" stock="5" onAdd={(num)=>console.log(`Se agrego ${num} producto/s`)}/> */}

      </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
