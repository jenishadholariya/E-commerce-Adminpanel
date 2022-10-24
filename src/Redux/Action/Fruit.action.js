import { BASE_URL } from '../../Base_url/Base_url';
import { DeleteAll_Fruit, GetAll_Fruit, PostAll_Fruit, PutAll_Fruit } from '../../Common/Axios/Fruitaxios';
import * as ActionType from '../ActionType'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/Firebase';

export const Get_Fruit = () => (dispatch) => {
    try {
        dispatch(Loading_Fruit())
        setTimeout(function () {
            GetAll_Fruit()
                .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data.data }));
            // fetch(BASE_URL + 'Fruit')
            //     .then(response => {
            //         if (response.ok) {
            //             return response;
            //         } else {
            //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
            //             error.response = response;
            //             throw error;
            //         }
            //     },
            //         error => {
            //             var errmess = new Error(error.message);
            //             throw errmess;
            //         })
            //     .then((response) => response.json())
            //     .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }));
        }, 2000)

    } catch (error) {
        dispatch(Error_Fruit(error.message))
    }
}

export const Delete_Fruit = (id) => (dispatch) => {
    try {
        DeleteAll_Fruit(id)
            .then((id) => dispatch({ type: ActionType.DELETE_DATA, payload: id }))
        // fetch(BASE_URL + 'Fruit/' + id, {
        //     method: 'DELETE'
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response;
        //         } else {
        //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //             error.response = response;
        //             throw error;
        //         }
        //     },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //     .then(response => response.json())
        //     .then((id) => dispatch({ type: ActionType.DELETE_DATA, payload: id }))
    } catch (error) {
        dispatch(Error_Fruit(error.message))
    }
}

export const Add_Fruit = (values) => async(dispatch) => {
    // try {
    //     PostAll_Fruit(data)
    //         .then((data) => dispatch({ type: ActionType.ADD_DATA, payload: data }))
    //     // .catch(error => dispatch(Error_Fruit(error.message)))
    //     // fetch(BASE_URL + 'Fruit/', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(data)
    //     // })
    //     //     .then(response => {
    //     //         if (response.ok) {
    //     //             return response;
    //     //         } else {
    //     //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //     //             error.response = response;
    //     //             throw error;
    //     //         }
    //     //     },
    //     //         error => {
    //     //             var errmess = new Error(error.message);
    //     //             throw errmess;
    //     //         })
    //     //     .then(response => response.json())
    //     //     .then((data) => dispatch({ type: ActionType.ADD_DATA, payload: data }))
    // }
    // catch (error) {
    //     dispatch(Error_Fruit(error.message))
    // }
    try {
        const docRef = await addDoc(collection(db, "Fruit"),{
            
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch({ type: ActionType.ADD_DATA, payload: { id: docRef.id, ...values}})
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const Put_Fruit = (data) => (dispatch) => {
    try {
        PutAll_Fruit(data)
            .then((data) => dispatch({ type: ActionType.PUT_DATA, payload: data }))
        // fetch(BASE_URL + 'Fruit/' + data.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response;
        //         } else {
        //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //             error.response = response;
        //             throw error;
        //         }
        //     },
        //         error => {
        //             var errmess = new Error(error.message);
        //             throw errmess;
        //         })
        //     .then(response => response.json())
        //     .then((data) => dispatch({ type: ActionType.PUT_DATA, payload: data }))
    }
    catch (error) {
        dispatch(Error_Fruit(error.message))
    }
}

export const Error_Fruit = () => (dispatch) => {
    dispatch({ type: ActionType.ERROR_DATA })
}

export const Loading_Fruit = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_FRUIT })
}