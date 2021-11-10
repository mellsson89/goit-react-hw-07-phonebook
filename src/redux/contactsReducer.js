import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {addContactRequest,addContactSuccess,addContactError,deleteContactRequest,deleteContactSuccess,
    deleteContactError,fetchContactsRequest,fetchContactsSuccess,fetchContactsError,handleFilter} from './actions'

const itemsReducer =createReducer([],{
[fetchContactsSuccess]:(state,{payload}) => payload,
[addContactSuccess]:(state,{payload}) => [...state,payload],
[deleteContactSuccess]:(state,{payload}) => state.filter(contact => contact.id !== payload)
})

const filterReducer=createReducer('',{
[handleFilter]:(_,{payload})=> payload
})

const loading =createReducer(false,{
    [addContactRequest]: ()=> true,
    [addContactSuccess]: ()=> false,
    [addContactError]: ()=> false,
    [deleteContactRequest]:()=> true,
    [deleteContactSuccess]:()=> false,
    [deleteContactError]:()=> false,
    [fetchContactsRequest]: ()=> true,
    [fetchContactsSuccess]: ()=> false,
    [fetchContactsError]: ()=> false,

})
const errorMessenger =createReducer(false,{
    [addContactRequest]: ()=> false,
    [addContactSuccess]: ()=> false,
    [addContactError]: ()=> true,
    [deleteContactRequest]:()=> false,
    [deleteContactSuccess]:()=> false,
    [deleteContactError]:()=> true,
    [fetchContactsRequest]: ()=> false,
    [fetchContactsSuccess]: ()=> false,
    [fetchContactsError]: ()=> true,

})

export const contactsReducer=combineReducers({
    items:itemsReducer,
    filter:filterReducer,
    loading,
    errorMessenger
})
