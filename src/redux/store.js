import {contactsReducer} from './contactsReducer'
import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';



const middleware=[...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),logger];




export const store=configureStore({
    reducer:{
        contacts:contactsReducer
    },
    middleware
})

