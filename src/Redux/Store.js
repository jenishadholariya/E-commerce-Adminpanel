import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { RootReducer } from './Ruducer/Index';

export const ConfigureStore = () => {
    let store = createStore(RootReducer, applyMiddleware(thunk));

    return store;
}