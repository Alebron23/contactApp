import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getContactAsync } from '../../repositories/projectsRepo';

class Contact extends Component {
  state = { 
    contact: ''
  }

  async componentDidMount() {
    if (this.props.match !== undefined) {
      const contact = await getContactAsync(this.props.match.params.id)

      if (contact) {
        this.setState({ contact });
      }
    }
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
        {this.state.contact === '' ? 
          '' 
        :  
          <div>
            <div> {`${first_name} ${last_name}`}</div>
            <div> {company_name} </div>
            <div> {`${address} ${city}, ${state}, ${zip}`} </div>
            <div> {phone} </div>
            <div> {work_phone} </div>
            <div> {email} </div>
            <div> {url} </div>
          </div>
        }
      </div>
    )
  }
}
  
Contact.propTypes = {
  match: PropTypes.object
}

export default Contact