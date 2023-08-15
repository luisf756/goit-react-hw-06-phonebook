// import PropTypes from 'prop-types';
import './phoneStyles.css'
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from "redux/contacts/contacts-selectors";



const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const onChange = event => {
    dispatch(actions.changeFilter(event.currentTarget.value));
  };
  return(
  <div >
    <p>Find contacts<br></br> by name</p>
    <input type="name" value={filterValue} onChange={onChange} />
  </div>
)
};


export default Filter;