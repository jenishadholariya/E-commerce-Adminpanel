import * as ActionType from '../ActionType'


const initval = {
    isloding: 'false',
    fruit: [],
    error: ''
}

export const FruitReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                isloding: false,
                fruit: action.payload,
                error: ''
            }
        case ActionType.DELETE_DATA:
            return {
                ...state,
                isloding: false,
                fruit: state.fruit.filter((m) => m.id !== action.payload),
                error: ''
            }
        case ActionType.ADD_DATA:
            return {
                ...state,
                isloding: false,
                fruit: state.fruit.concat(action.payload),
                error: ''
            }
        case ActionType.PUT_DATA:
            return {
                ...state,
                isloding: false,
                fruit: state.fruit.map((m)=>{
                    if(m.id === action.payload.id){
                        return action.payload
                    }else{
                        return m
                    }
                }),
                error: ''
            }
        default:
            return state
    }
}