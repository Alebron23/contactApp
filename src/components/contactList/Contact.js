import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Header from '../Header';
import AddContact from '../AddContact';
import { getContactAsync, deleteContactAsync } from '../../repositories/projectsRepo';

import './Contact.css';

class Contact extends Component {
  state = { 
    contact: '',
    isInfoDisplayed: true
  }

  async componentDidMount() {
    if (this.props.match !== undefined) {
      const contact = await getContactAsync(this.props.match.params.id)

      if (contact) {
        this.setState({ contact });
      }
    }
  }

  handleDisplayEdit = () => this.setState({ isInfoDisplayed: !this.state.isInfoDisplayed });
  handleUpdateContact = updatedContact => {
    this.setState({ contact: updatedContact });
  }
  handleDeleteContact = async () => {
    const res = await deleteContactAsync(this.state.contact.id);

    if (res.success) {
      alert('Success: Contact Deleted');
    } else {
      alert('Error: Contact Not Deleted');
    }
  }

  render() {
    const { 
      address,
      city,
      company_name,
      email,
      first_name,
      last_name,
      phone,
      state,
      url,
      work_phone,
      zip,
      id
    } = this.state.contact;

    return (
      <div>
        <Header />
        <div className='contact-container'>
          <h3>Contact Info</h3>
          {this.state.contact === '' ? 
            '' 
          : ( 
          <div> 
          {this.state.isInfoDisplayed ? 
            <div className='contact' data-tip='click to edit' onClick={this.handleDisplayEdit}>
              <div className="contact-details"><em>Name</em>: {`${first_name} ${last_name}`}</div>
              <div className="contact-details"><em>Company Name:</em> {company_name} </div>
              <div className="contact-details"><em>Address:</em> {`${address} ${city}, ${state}, ${zip}`} </div>
              <div className="contact-details"><em>Phone:</em> {phone} </div>
              <div className="contact-details"><em>Work Phone:</em> {work_phone} </div>
              <div className="contact-details"><em>Email:</em> {email} </div>
              <div className="contact-details"><em>Url:</em> {url} </div>
              <ReactTooltip />
            </div>
          : 
            <AddContact 
              firstName={first_name}
              lastName={last_name}
              companyName={company_name}
              address={address}
              city={city}
              state={state}
              zip={zip}
              phone={phone}
              work_phone={work_phone}
              email={email}
              url={url}
              isEditShown={true}
              handleDisplayEdit={this.handleDisplayEdit}
              id={id}
              handleUpdateContact={this.handleUpdateContact}
              handleDeleteContact={this.handleDeleteContact}/>
          }
            </div>
          )
          }
        </div>
      </div>
    )
  }
}
  
Contact.propTypes = {
  match: PropTypes.object
}

export default Contact