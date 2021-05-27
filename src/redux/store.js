import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filter from './reducers/filter';
import cart from './reducers/cart';


const allReaducers = combineReducers({
    filter,
    cart
})
const store = createStore(allReaducers, composeWithDevTools(applyMiddleware(thunk)));

export default store; 

