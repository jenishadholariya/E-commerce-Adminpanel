import * as ActionType from '../ActionType'


export const Get_Fruit = () => (dispatch) => {
    try {
        fetch('http://localhost:3004/Fruit')
            .then((response) => response.json())
            .then((data) => dispatch({type:ActionType.GET_DATA,payload:data}));

    } catch (error) {

    }
}

export const Delete_Fruit = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3004/Fruit' + id ,{
            method:'DELETE'
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
            .then((response) => response.json())
            .then((id) => dispatch({type:ActionType.GET_DATA,payload:id}));
    } catch (error) {

    }
}