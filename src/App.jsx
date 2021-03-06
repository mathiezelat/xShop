import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import {CartProviderContext} from './context/CartContext';
import Cart from './components/Cart';
import Help from './components/Help';
import Nosotros from './components/Nosotros';

const App = () => {
  return (

    <BrowserRouter>
    <CartProviderContext>
    <div className="App">
      <div className="App-fondo">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>

        <Route path='/category/:categoryId'>
          <ItemListContainer />
        </Route>

        <Route path='/item/:itemId'>
          <ItemDetailContainer />
        </Route>

        <Route path='/nosotros'>
          <Nosotros/>
        </Route>
        
        <Route path='/ayuda'>
          <Help/>
        </Route>

        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='*'>
          <Error404/>
        </Route>
      </Switch>
      <Footer/>
      </div>
    </div>
    </CartProviderContext>
    </BrowserRouter>

  );
}

export default App;
