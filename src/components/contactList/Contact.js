import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Header from '../Header';
import { getContactAsync } from '../../repositories/projectsRepo';

import './Contact.css';

class Contact extends Component {
  state = { 
    contact: '',
    isEditShown: false
  }

  async componentDidMount() {
    if (this.props.match !== undefined) {
      const contact = await getContactAsync(this.props.match.params.id)

      if (contact) {
        this.setState({ contact });
      }
    }
  }

  handleDisplayEdit = () => {

  }

  render() {
    const { 
      address,
      city,
      company_name,
      created_at,
      email,
      first_name,
      id,
      last_name,
      phone,
      state,
      updated_at,
      url,
      work_phone,
      zip
    } = this.state.contact;

    return (
      <div>
        <Header />
        <div className='contact-container'>
          <h3>Contact Info</h3>
          {this.state.contact === '' ? 
            '' 
          :  
            <div className='contact' data-tip='click to update'>
              <div className="contact-details"><em>Name</em>: {`${first_name} ${last_name}`}</div>
              <div className="contact-details"><em>Company Name:</em> {company_name} </div>
              <div className="contact-details"><em>Address:</em> {`${address} ${city}, ${state}, ${zip}`} </div>
              <div className="contact-details"><em>Phone:</em> {phone} </div>
              <div className="contact-details"><em>Work Phone:</em> {work_phone} </div>
              <div className="contact-details"><em>Email:</em> {email} </div>
              <div className="contact-details"><em>Url:</em> {url} </div>
              <ReactTooltip />
            </div>
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