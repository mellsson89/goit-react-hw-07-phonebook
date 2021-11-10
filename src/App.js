import React, {useEffect, useState} from "react";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import {fetchContact} from './redux/contacts-operations'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {loadingContacts,errorMessenger} from './redux/contacts-selectors';

export default function App(){

    const [showModal,setShowModal]=useState(false);

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchContact())
    },[dispatch])

    const toggleModal =() => {
        setShowModal(!showModal);
    }

    const loading=useSelector(state => loadingContacts(state));
    const error=useSelector(state => errorMessenger(state));


        return (
            <div>
                <button type='button' onClick={toggleModal}>Add contact</button>
                <h1>Phonebook</h1>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
                {showModal && <Modal onClose={toggleModal}><ContactForm onSave={toggleModal}/></Modal>}
                {error && <p color="red">Error!!!!</p>}
                {loading &&  <Loader type="Watch" color="#00BFFF" height={60} width={60} timeout={3000}  />}
            </div>
        )
    }


