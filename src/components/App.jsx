// import style from './phoneStyles';

import { useSelector } from 'react-redux';
import { getItems } from "redux/contacts/contacts-selectors";

import ContactForm from './phone/ContactForm';
import ContactList from './phone/ContactList';
import Filter from './phone/Filter';

export const App = () => {
  const contacts = useSelector(getItems);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        // background-color: '#213547'
      }}
    >
      <div >
      <ContactForm></ContactForm>
      Contactos: {contacts.length}
      </div>
      <div>
      <Filter></Filter>
      <ContactList></ContactList>
      </div>
      

    </div>
  );
};
