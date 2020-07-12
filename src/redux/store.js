import { createStore, combineReducers } from 'redux'
import filtersReducer from './reducers/filters'
import cartReducer from './reducers/cart'
import pizzasReducer from './reducers/pizza'

const rootReducer = combineReducers({
    filters: filtersReducer,
    cart: cartReducer,
    pizzas: pizzasReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store