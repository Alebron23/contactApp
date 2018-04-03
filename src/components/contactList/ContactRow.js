import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import './ContactRow.css';

const ContactRow = ({ contactName, companyName, cityState, phoneNumber, email, match }) => (
  <div className='contact-container'>
    message with {match !== undefined ? match.params.id : ''}
    <div className='contact-name'>{contactName}</div>
    <div className='company-name'>{companyName}</div>
    <div className='city-state'>{cityState}</div>
    <div className='phone'>{phoneNumber}</div>
    <div className='email'>{email}</div>
  </div>
)

ContactRow.propTypes = {
  contactName: PropTypes.string,
  companyName: PropTypes.string,
  cityState: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string
}

export default ContactRow;