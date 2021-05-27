import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filter from './reducers/filter';
import cart from './reducers/cart';
import pizzas from './reducers/pizzas';


const allReaducers = combineReducers({
    filter,
    cart,
    pizzas
})
const store = createStore(allReaducers,composeWithDevTools(applyMiddleware(thunk)));

export default store; 

