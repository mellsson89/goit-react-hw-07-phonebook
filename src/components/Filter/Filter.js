import React from "react";
import style from './styles/filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {handleFilter} from '../../redux/actions';
import {filterContacts} from '../../redux/contacts-selectors';
import PropTypes from 'prop-types'



export default function Filter()  {

    const value=useSelector(state => filterContacts(state));
    const dispatch=useDispatch();
    const onChange=(e) => dispatch(handleFilter(e.currentTarget.value));

    return (

        <label className={style.filterLabel}>
            Find contacts by name
            <input type='text' name='filter' value={value} onChange={onChange} className={style.filterInput}/>
        </label>
    )
}

Filter.propTypes ={
    value:PropTypes.string
}