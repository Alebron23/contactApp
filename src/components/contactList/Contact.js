import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import './Contact.css';

const Contact = ({ contactName, companyName, cityState, phoneNumber, email}) => (
  <div className='contact-container'>
    <div className='contact-name'>{contactName}</div>
    <div className='company-name'>{companyName}</div>
    <div className='city-state'>{cityState}</div>
    <div className='phone'>{phoneNumber}</div>
    <div className='email'>{email}</div>
  </div>
)

Contact.propTypes = {
  contactName: PropTypes.string,
  companyName: PropTypes.string,
  cityState: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string
}

export default Contact;