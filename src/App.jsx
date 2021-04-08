import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import {CartProviderContext} from './context/CartContext';

const App = () => {
  return (

  <CartProviderContext>

    <BrowserRouter>
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer name="Productos Destacados"/>
        </Route>

        <Route exact path='/category/:categoryId'>
          <ItemListContainer name="Categoria"/>
        </Route>

        <Route exact path='/item/:itemId'>
          <ItemDetailContainer />
        </Route>

        <Route path='*'>
          <Error404/>
        </Route>
      </Switch>
      <Footer/>
      </div>
    </div>
    </BrowserRouter>

    </CartProviderContext>
  );
}

export default App;
