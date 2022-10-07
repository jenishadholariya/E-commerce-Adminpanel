import { BASE_URL } from '../../Base_url/Base_url';
import * as ActionType from '../ActionType'

export const Vegetable_get = () => (dispatch) => {
    try {
        fetch(BASE_URL + 'Vegetable')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.VEGETABLE_GET, payload: data }));

    } catch (error) {
        dispatch(Error_Vegetable(error.message))
    }
}

export const Vegetable_delete = (id) => (dispatch) => {
    try {
        fetch(BASE_URL + 'Vegetable/' + id, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then((id) => dispatch({ type: ActionType.VEGETABLE_DELETE, payload: id }))
    } catch (error) {
        dispatch(Error_Vegetable(error.message))
    }
}

export const Error_Vegetable = () => (dispatch) => {
    dispatch({type:ActionType.VEGETABLE_DELETE})
}