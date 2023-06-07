import PropTypes from 'prop-types';
import css from '../Style.module.css';

function ContactsList({ contacts, onDelete }) {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactsListItem}>
          {contact.name} - {contact.number}
          <button type="button" data-id={contact.id} onClick={() => onDelete(contact.id)} className={css.buttonDeleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
}

export default ContactsList;