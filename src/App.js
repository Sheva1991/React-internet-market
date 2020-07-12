import React, { useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizza';


const App = (props) => {
  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    //   .then((res) => res.json())
    //   .then(json => {
    //     setDataBase(json.pizzas)
    //   })
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas)
    })
  }, [props])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home data={props.items} />} />
        <Route path='/cart' component={Cart} />
      </div>
    </div >
  );
}

const mapStateToProps = (state) => ({
  items: state.pizzas.items
})


export default connect(mapStateToProps, { setPizzas })(App);
