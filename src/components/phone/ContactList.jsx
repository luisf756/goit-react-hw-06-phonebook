import  './phoneStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions'
import { getItems, getFilter } from "redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);
  
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(actions.deleteContact(contactId));
};

const listItems = contacts.filter(({name}) => name.toLowerCase().includes(filterValue.trim())).map(({id, name, number}) =>
    <li key={id}>
      <div className='contact'>
      <p className='ptrolio'>
        <b>{name}: </b>
          {' ' + number}
        
      </p>
      <button
          type="submit"
          onClick={() => onDeleteContact(id)}
          >delete</button>
      </div>
      
    </li>
  );
  return <ul>{listItems}</ul>;
}


export default ContactList;