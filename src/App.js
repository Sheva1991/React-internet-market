import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  const [dataBase, setDataBase] = useState([])

  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    //   .then((res) => res.json())
    //   .then(json => {
    //     setDataBase(json.pizzas)
    //   })
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setDataBase(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home data={dataBase} />} />
        <Route path='/cart' component={Cart} />
      </div>
    </div >
  );
}

export default App;
