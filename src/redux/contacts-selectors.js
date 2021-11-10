import {createSelector} from "@reduxjs/toolkit";

export const allContacts=state => state.contacts.items;

export const filterContacts=state => state.contacts.filter;

export const loadingContacts =state => state.contacts.loading;
export const errorMessenger =state => state.contacts.error;

export const getVisibleContacts=createSelector([allContacts,filterContacts],(contacts,filter) =>{
    const normalizeFilter=filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
} )