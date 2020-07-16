import React, { useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizza';


const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    //   .then((res) => res.json())
    //   .then(json => {
    //     setDataBase(json.pizzas)
    //   })
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      // setPizzas(data.pizzas)
      dispatch(setPizzas(data))
    })
  })
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div >
  );
}

// const mapStateToProps = (state) => ({
//   items: state.pizzas.items
// })


// export default connect(mapStateToProps, { setPizzas })(App);
export default App;
