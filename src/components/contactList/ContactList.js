import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

import ContactListHeader from './ContactListHeader';
import Contact from './Contact';
import Header from '../Header';
import { getContactAsync } from '../../repositories/projectsRepo';

import './ContactList.css';

class ContactList extends Component { 
  state = {
    contacts: []
  }

  async componentDidMount() {
    const contacts = await getContactAsync({
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
    console.log(this.state.contacts);
    return (
      <div className='contact-list-container'> 
        <Header />
        <div className='contact-list'>
          <ContactListHeader />
          {this.state.contacts.map(contact => ( 
            <Link 
              to={`/contact${contact.id}`}
              key={contact.id}
              style={{ textDecoration: 'none', width: '100%', color: 'black', marginLeft: '-30px' }}>
              <Contact 
                contactName={`${contact.first_name} ${contact.last_name}`}
                companyName={contact.company_name}
                cityState={`${contact.city} ${contact.state}`}
                phoneNumber={contact.phone}
                email={contact.email} 
                key={contact.id}/>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

ContactList.propTypes = {
  
}

export default ContactList