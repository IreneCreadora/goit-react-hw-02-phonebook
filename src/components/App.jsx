import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

import { Container, Phonebook, Contacts } from './Component.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const filterNormalize = this.state.filter.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      }
    });
  };

  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(constact => constact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts(filter);
    return (
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={this.formSubmit} />

        <Contacts>Contacts</Contacts>
        <Filter
          title="Find contact by name"
          onChange={this.handleFilterChange}
          value={filter}
        />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.contactDelete}
        />
      </Container>
    );
  }
}

export default App;
