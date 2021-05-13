import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filter from './reducers/filter'


const allReaducers = combineReducers({
    filter
})
const store = createStore(allReaducers, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(()=> console.log(store.getState()));

// window.store = store;

export default store; 

