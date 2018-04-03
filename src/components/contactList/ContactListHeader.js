import React from 'react'

import './ContactListHeader.css'

const ContactListHeader = () => (
  <div className='contact-list-header'>
    <div className='contact-list-name'>Contact Name</div>
    <div className='company-list-name'>Company Name</div>
    <div className='city-state-header'>City/State</div>
    <div className='phone-header'>Phone</div>
    <div className='email-header'>Email</div>
  </div>
)

export default ContactListHeader