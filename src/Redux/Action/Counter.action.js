import * as ActionType from '../ActionType'

export const IncrementAction = () => (dispatch) => {
    dispatch({type:ActionType.INCREMENT_COUNTER})
}

export const DecrementAction = () => (dispatch) => {
    dispatch({type:ActionType.DECREMENT_COUNTER})
}