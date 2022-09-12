import { CounterReducer } from "./Counter.reducer";
import { combineReducers } from 'redux'
import { FruitReducer } from "./Fruit.reducer";


export const RootReducer = combineReducers({
    counter:CounterReducer,
    fruit:FruitReducer
})