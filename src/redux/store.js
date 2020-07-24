import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import filtersReducer from './reducers/filters'
import cartReducer from './reducers/cart'
import pizzasReducer from './reducers/pizza'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    filters: filtersReducer,
    cart: cartReducer,
    pizzas: pizzasReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store