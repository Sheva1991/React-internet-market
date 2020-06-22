import React from 'react';

import Header from './components/Header';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div >
  );
}

export default App;
