import { CounterReducer } from "./Counter.reducer";
import { combineReducers } from 'redux'
import { FruitReducer } from "./Fruit.reducer";
import { VegetableReducer } from "./Vegetable.Reducer";


export const RootReducer = combineReducers({
    counter:CounterReducer,
    fruit:FruitReducer,
    vegetable:VegetableReducer
})