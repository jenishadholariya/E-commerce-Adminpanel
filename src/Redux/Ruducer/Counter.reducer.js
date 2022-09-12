import * as ActionType from '../ActionType'

const initval = {
    count: 0
}

export const CounterReducer = (state = initval, action) => {

    console.log(action.type,action.payload);
    
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case ActionType.DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
            default:
                return state
    }
}