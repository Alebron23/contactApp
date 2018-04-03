import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { addContactAsync } from '../repositories/projectsRepo';

import './AddContact.css';

class AddContact extends Component {
  state = {
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    workPhone: '',
    email: '',
    url: ''
  }

  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // Don't have to do this because arrow funciton do automatic this binding.
  // this.handleFirstNameChange = this.handleFirstNamechange.bind(this)
  // }


  // handleFirstName = function(event) { this.setState({})}
  handleFirstNameChange = event => this.setState({ firstName: event.target.value });
  handleLastNameChange = event => this.setState({ lastName: event.target.value });
  handleCompanyNameChange = event => this.setState({ companyName: event.target.value });
  handleAddressChange = event => this.setState({ address: event.target.value });
  handleCityChange = event => this.setState({ city: event.target.value });
  handleStateChange = event => this.setState({ state: event.target.value });
  handleZipChange = event => this.setState({ zip: event.target.value });
  handlePhoneChange = event => this.setState({ phone: event.target.value });
  handleWorkPhoneChange = event => this.setState({ workPhone: event.target.value });
  handleEmailChange = event => this.setState({ email: event.target.value });
  handleUrlChange = event => this.setState({ url: event.target.value });

  handleSubmit = async event => {
    if (this.state.firstName === '') {
      alert('Please enter a valid First Name');
    } else {
      event.preventDefault();
      await addContactAsync({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        company_name: this.state.companyName,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone,
        work_phone: this.state.workPhone,
        email: this.state.email,
        url: this.state.url
      });

      this.setState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        workPhone: '',
        email: '',
        url: '' 
      })
    }
  }

  render() {
    let {
      firstName,
      lastName,
      companyName,
      address,
      city,
      state,
      zip,
      phone,
      workPhone,
      email,
      url
    } = this.state;

    return (
      <div className="add-contact-container">
      <Header />
      <h3> Add Contact </h3>
  
      <form id="AddContactForm" onSubmit={this.handleSubmit}>
          <label>First Name: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="first_name" 
              placeholder="Bob" 
              onChange={this.handleFirstNameChange}
              value={firstName}/>
          <br />
  
          <label>Last Name: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="last_name" 
              placeholder="McNair" 
              onChange={this.handleLastNameChange}
              value={lastName}/>
          <br />
  
          <label>Company Name: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="company_name" 
              placeholder="NFL" 
              onChange={this.handleCompanyNameChange}
              value={companyName}/>
          <br />
  
          <label>Address: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="address" 
              placeholder="310 University Way" 
              onChange={this.handleAddressChange}
              value={address}/>
          <br />
  
          <label>City: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="city" 
              placeholder="Florence" 
              onChange={this.handleCityChange}
              value={city}/>
          <br />
  
          <label>State: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="state" 
              placeholder="SC" 
              onChange={this.handleStateChange}
              value={state}/>
          <br />
  
          <label>Zip: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="zip" 
              placeholder="29301" 
              onChange={this.handleZipChange}
              value={zip}/>
          <br />
  
          <label>Phone: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="phone" 
              placeholder="347-659-0682" 
              onChange={this.handlePhoneChange}
              value={phone}/>
          <br />
  
          <label>Work Phone: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="work_phone" 
              placeholder="864-347-9518" 
              onChange={this.handleWorkPhoneChange}
              value={workPhone}/>
          <br />
  
          <label>Email: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="email" 
              placeholder="bob@mc@gmail.com" 
              onChange={this.handleEmailChange}
              value={email}/>
          <br />
  
          <label>URL: </label><br />
            <input 
              className="form-input" 
              type="text" 
              name="url" 
              placeholder="www.bobmc.com" 
              onChange={this.handleUrlChange}
              value={url}/>
          <br />
  
          <button id="submitTransaction" className="submit-button" type="submit" name="form-submit"> Submit</button>
      </form>
    </div>
    )
  }
}

AddContact.propTypes = {
  handleSubmit: PropTypes.func
}

export default AddContact