import React from "react";
import style from './styles/contactList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from '../../redux/contacts-operations';
import {getVisibleContacts} from '../../redux/contacts-selectors';
import PropTypes from 'prop-types';

export default function ContactList ()  {
    const contacts=useSelector(state => getVisibleContacts(state));
    const dispatch=useDispatch();
    const onDelete= (id) => dispatch(deleteContact(id));
    return (
        <ul>
            {contacts.map(({id,name,number})=> (

                <li key={id} className={style.contactList_item}>{name}: {number} <button onClick={() => onDelete(id)}>Delete</button></li>

            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired
    }))
}