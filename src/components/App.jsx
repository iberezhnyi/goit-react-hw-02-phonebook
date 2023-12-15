import { Component } from 'react';
import ContactForm from './Forms/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    const isDuplicated = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicated) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prev => ({ contacts: [...prev.contacts, newUser] }));
  };

  deleteUser = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  searchUser = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredUsers = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredUsers = this.getFilteredUsers();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} searchUser={this.searchUser} />
        <ContactsList user={filteredUsers} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
