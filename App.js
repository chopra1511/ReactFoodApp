import { Fragment, useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  }

  const closeCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onHide={closeCartHandler}/>}
      <Header onShown={openCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
