
import './phoneStyles.css'

import actions from '../../redux/contacts/contacts-actions';
import { getItems, getFilter } from "redux/contacts/contacts-selectors";
import { useDispatch, useSelector } from "react-redux"; //, useSelector
import { useState } from 'react';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const handleContactInfo = () => {
    dispatch(actions.addContact(name, number));
    if (filterValue !== '') {
        dispatch(actions.changeFilter(''));
    }
};


  const handleChange = e => {
    const { name, value } = e.currentTarget;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number': {
                setNumber(value);
                break;
            }
                
            default:
                return;
        }
  };
  
  
  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        if (filterValue !== '') {
            dispatch(actions.changeFilter(''));
        }
        
        return alert(`${name} is already in contacts`);
    }

    handleContactInfo();

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
};

    return (
      <div >
        <form  onSubmit={handleSubmit}>
          <div >
            <p>Nombre </p>

            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // className={style.input}
              required
            />
            <p>Numero</p>
            <input
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // className={style.input}
              required
            />
          </div>
          <button type="submit" >
            Añadir
          </button>
        </form>
      </div>
    );
  }


  export default ContactForm;