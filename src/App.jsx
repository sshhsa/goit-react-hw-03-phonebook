import React, {Component} from 'react';

import Form from './components/Form/Form';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Chapter from 'components/Chapter/Chapter';

import shortid from 'shortid';
import Notiflix from 'notiflix';

import css from './components/Style.module.css';

class App extends Component {
    state = {
    contacts: [],
    filter: ''
  };

  handleInputChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  handleOnSubmitForm = state => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === state.name.toLowerCase()
      )
    ) {
      alert(`${state.name} is already in contacts!`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name: state.name,
      number: state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteEntries = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  componentDidMount() {
    const contactsStorage = localStorage.getItem('contacts');
    const parseContactsStorage = JSON.parse(contactsStorage);

    if (parseContactsStorage) {
      this.setState({ contacts: parseContactsStorage })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      Notiflix.Notify.success('Field contacts was updated');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div className={css.phoneBook}>
            <div className={css.containerDefault}>
                <Chapter chapter={'Phonebook'}></Chapter>
                <Form formSubmit={this.handleOnSubmitForm} />
                <Chapter chapter={'Contacts'}></Chapter>
                <Filter text={filter} onChange={this.handleInputChange} />
                <ContactsList contacts={filteredContacts} onDelete={this.deleteEntries} />
            </div>
      </div>
    );
  }
}

export default App;