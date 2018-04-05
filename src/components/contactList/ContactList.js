import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactListHeader from './ContactListHeader';
import ContactRow from './ContactRow';
import Header from '../Header';
import { getContactsAsync } from '../../repositories/projectsRepo';

import './ContactList.css';

class ContactList extends Component { 
  state = {
    contacts: []
  }

  async componentDidMount() {
    const contacts = await getContactsAsync({
      limit: 1,
      sort: 'first_name' | 'last_name' | 'address' | 'city' | 'state',
      desc: true,
      page: 1
    })

    if (contacts) {
      this.setState({ contacts: contacts.data });
    }
  }

  render() {
    return (
      <div className='contact-list-container'> 
        <Header />
        <div className='contact-list'>
          <ContactListHeader />
          {this.state.contacts.map(contact => ( 
            <Link 
              to={`/contact/${contact.id}`}
              key={contact.id}
              style={{ textDecoration: 'none', width: '100%', color: 'black', marginLeft: '-30px' }}>
              <ContactRow 
                contactName={`${contact.first_name} ${contact.last_name}`}
                companyName={contact.company_name}
                cityState={`${contact.city} ${contact.state}`}
                phoneNumber={contact.phone}
                email={contact.email} 
                key={contact.id} />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default ContactList