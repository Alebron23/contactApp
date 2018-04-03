import React from 'react';
import PropTypes from 'prop-types';

import './ContactRow.css';

const ContactRow = ({ contactName, companyName, cityState, phoneNumber, email, match }) => (
  <div className='contact-row-container'>
    <div className='contact-name-row'>{contactName}</div>
    <div className='company-row'>{companyName}</div>
    <div className='city-state-row'>{cityState}</div>
    <div className='phone-row'>{phoneNumber}</div>
    <div className='email-row'>{email}</div>
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