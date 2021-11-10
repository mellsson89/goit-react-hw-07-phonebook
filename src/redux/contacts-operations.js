import axios from "axios";
import {addContactRequest,addContactSuccess,addContactError,deleteContactRequest,deleteContactSuccess,
    deleteContactError,fetchContactsRequest,fetchContactsSuccess,fetchContactsError} from './actions'



axios.defaults.baseURL='http://localhost:4040';

export const fetchContact=() =>  async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const {data}= await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data))

    }
    catch (error) {
        dispatch(fetchContactsError(error))
    }
}

export const addContact=(value)=> async dispatch => {
    dispatch(addContactRequest());

    try {
        const {data} = await axios.post('/contacts',value);
        dispatch(addContactSuccess(data));
    }
    catch (error) {
        dispatch(addContactError(error))
    }
}

export const deleteContact= id => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(deleteContactSuccess(id))
    }
    catch (error) {
        dispatch(deleteContactError(error))
    }
    // axios.delete(`/contacts/${id}`).then(()=> dispatch(deleteContactSuccess(id)))
    //     .catch(error => dispatch(deleteContactError(error)))
}


