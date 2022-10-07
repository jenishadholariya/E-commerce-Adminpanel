import * as ActionType from '../ActionType'

const initval = {
    error: '',
    isloading: 'false',
    Vegetable: []
}

export const VegetableReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionType.VEGETABLE_GET:
            return {
                ...state,
                Vegetable: action.payload,
                error: '',
                isloading: 'false',
            }
        case ActionType.VEGETABLE_DELETE:
            return {
                ...state,
                Vegetable: state.Vegetable.filter((m) => m.id !== action.payload),
                error: '',
                isloading: 'false',
            }
        case ActionType.VEGETABLE_PUT:
            return {
                ...state,
                Vegetable: state.Vegetable.map((m)=>{
                    if(m.id === action.payload.id){
                        return action.payload
                    }else{
                        return m
                    }
                }),
                error: '',
                isloading: 'false',
            }
        case ActionType.VEGETABLE_ADD:
            return {
                ...state,
                Vegetable: state.Vegetable.concat(action.payload),
                error: '',
                isloading: 'false',
            }
        default:
            return state
    }
}