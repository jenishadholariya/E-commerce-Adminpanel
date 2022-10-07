import { deleteRequest, getRequest, postRequest, putRequest } from "./Request"

export const GetAll_Fruit = () =>{ 
    return getRequest('Fruit')
} 

export const PostAll_Fruit = (data) => {
    return postRequest( 'Fruit' , data)
}

export const DeleteAll_Fruit = (id) => {
    return deleteRequest('Fruit/', id)
}

export const PutAll_Fruit = (id) => {
    return putRequest('Fruit/', id)
}