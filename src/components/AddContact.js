import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from './Header';
import { addContactAsync, updateContactAsync } from '../repositories/projectsRepo';

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

  componentDidMount() {
    const { 
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
    } = this.props;

    const fName = firstName !== undefined ? firstName : '';
    const lName = lastName !== undefined ? lastName : '';
    const cName = companyName !== undefined ? companyName : '';
    const addr = address !== undefined ? address : '';
    const cty = city !== undefined ? city : '';
    const st = state !== undefined ? state : '';
    const zp = zip !== undefined ? zip : '';
    const pNum = phone !== undefined ? phone : '';
    const wpNum = workPhone !== undefined ? workPhone : '';
    const mail = email !== undefined ? email : '';
    const website = url !== undefined ? url : '';

    this.setState({ 
      firstName: fName,
      lastName: lName,
      companyName: cName,
      address: addr,
      city: cty,
      state: st,
      zip: zp,
      phone: pNum,
      workPhone: wpNum,
      email: mail,
      url: website
    });
  }

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
  handleSetEditShown = isShown => this.setState({ isEditShown: isShown });

  handleSubmit = async event => {
    if (this.state.firstName === '' || this.state.lastname === '') {
      alert('Please Enter a First and Last Name');
      event.preventDefault();
    } else {
      event.preventDefault();
      const res = await addContactAsync({
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

      if (res.success) {
        alert('Success: Contact Added')

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
      } else {
        alert('Err: Contact Not Added');
      }
    }
  }

  handleUpdate = async event => {
    event.preventDefault();
    const res = await updateContactAsync(this.props.id, {
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

    if (res.success) {
      alert('Success: Contact Updated');
      this.props.handleUpdateContact(res.updated_contact);
      this.props.handleDisplayEdit(false);
    } else {
      alert('Error: Contact Not Updated');
    }
  }

  handleCancel = event => {
    event.preventDefault();
    this.props.handleDisplayEdit(false);
  }

  render() {
    const {
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
      <div>
        { this.props.isEditShown !== undefined ? 
          <form id="AddContactForm" onSubmit={this.handleUpdate}>
            <div className='add-contact-form-container'>
              <div className='add-contact-form'>
                <div className='add-contact-form-half'>
                  <div>
                    <label>First Name </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="first_name" 
                        placeholder="Bob" 
                        onChange={this.handleFirstNameChange}
                        value={firstName}/>
                    <br />
                  </div>
            
                  <div>
                    <label>Last Name </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="last_name" 
                        placeholder="McNair" 
                        onChange={this.handleLastNameChange}
                        value={lastName}/>
                    <br />
                  </div>

                  <div>
                    <label>Company Name </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="company_name" 
                        placeholder="Google" 
                        onChange={this.handleCompanyNameChange}
                        value={companyName}/>
                    <br />
                  </div>

                  <div>
                    <label>Address </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="address" 
                        placeholder="310 University Way" 
                        onChange={this.handleAddressChange}
                        value={address}/>
                    <br />
                  </div>

                  <div>
                    <label>City </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="city" 
                        placeholder="Florence" 
                        onChange={this.handleCityChange}
                        value={city}/>
                    <br />
                  </div>
                </div>

                <div className='add-contact-form-half'>
                  <div>
                    <label>State </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="state" 
                        placeholder="SC" 
                        onChange={this.handleStateChange}
                        value={state}/>
                    <br />
                  </div>

                  <div>
                    <label>Zip </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="zip" 
                        placeholder="29301" 
                        onChange={this.handleZipChange}
                        value={zip}/>
                    <br />
                  </div>

                  <div>
                    <label>Phone </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="phone" 
                        placeholder="347-659-0682" 
                        onChange={this.handlePhoneChange}
                        value={phone}/>
                    <br />
                  </div>

                  <div>
                    <label>Work Phone </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="work_phone" 
                        placeholder="864-347-9518" 
                        onChange={this.handleWorkPhoneChange}
                        value={workPhone}/>
                    <br />
                  </div>

                  <div>
                    <label>Email </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="email" 
                        placeholder="bob@mc@gmail.com" 
                        onChange={this.handleEmailChange}
                        value={email}/>
                    <br />
                  </div>
                </div>
              </div>

              <div>
                <label>URL </label><br />
                <input 
                  className="form-input url" 
                  type="text" 
                  name="url" 
                  placeholder="www.bobmc.com" 
                  onChange={this.handleUrlChange}
                  value={url}/>
                <br />
              </div>
    
              <div className='edit-buttons'>
                <button id="submitTransaction" className='contact-button' type="submit" name="form-submit"> Update</button>
                <button className='contact-button' onClick={this.handleCancel}> Cancel </button>
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/contact_list'>
                  <button className='contact-button' onClick={this.props.handleDeleteContact}>
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </form> 
        : 
          <div className='add-contact-container'>
            <Header />
            <h3> Add Contact </h3>
            
            <form onSubmit={this.handleSubmit}>
              <div className='add-contact-form-container'>
                <div className='add-contact-form'>
                  <div className='add-contact-form-half'>
                    <div>
                      <label>First Name <span className='required-field'>*</span></label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="first_name" 
                        placeholder="Bob" 
                        onChange={this.handleFirstNameChange}
                        value={firstName}/>
                    </div>
                    <br />

                    <div>
                      <label>Last Name <span className='required-field'>*</span></label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="last_name" 
                        placeholder="McNair" 
                        onChange={this.handleLastNameChange}
                        value={lastName}/>
                    </div>
                    <br />

                    <div>
                      <label>Company Name </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="company_name" 
                        placeholder="Google" 
                        onChange={this.handleCompanyNameChange}
                        value={companyName}/>
                    </div>
                    <br />

                    <div>
                      <label>Address </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="address" 
                        placeholder="310 University Way" 
                        onChange={this.handleAddressChange}
                        value={address}/>
                    </div>
                    <br />

                    <div>
                      <label>City </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="city" 
                        placeholder="Florence" 
                        onChange={this.handleCityChange}
                        value={city}/>
                    </div>
                    <br />
                  </div>

                  <div className='add-contact-form-half'>
                    <div>
                      <label>State </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="state" 
                        placeholder="SC" 
                        onChange={this.handleStateChange}
                        value={state}/>
                    </div>
                    <br />

                    <div>
                      <label>Zip </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="zip" 
                        placeholder="29301" 
                        onChange={this.handleZipChange}
                        value={zip}/>
                    </div>
                    <br />

                    <div>
                      <label>Phone </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="phone" 
                        placeholder="347-659-0682" 
                        onChange={this.handlePhoneChange}
                        value={phone}/>
                    </div>
                    <br />

                    <div>
                      <label>Work Phone </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="work_phone" 
                        placeholder="864-347-9518" 
                        onChange={this.handleWorkPhoneChange}
                        value={workPhone}/>
                    </div>
                    <br />

                    <div>
                      <label>Email </label><br />
                      <input 
                        className="form-input" 
                        type="text" 
                        name="email" 
                        placeholder="bob@mc@gmail.com" 
                        onChange={this.handleEmailChange}
                        value={email}/>
                    </div>
                    <br />
                  </div>
                </div>

                <div>
                  <label>URL </label><br />
                  <input 
                    className="form-input url" 
                    type="text" 
                    name="url" 
                    placeholder="www.bobmc.com" 
                    onChange={this.handleUrlChange}
                    value={url}/>
                </div>
                <br />

                <button className='contact-button' type="submit" name="form-submit"> Submit</button>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}

AddContact.propTypes = {
  handleSubmit: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  companyName: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  phone: PropTypes.string,
  workPhone: PropTypes.string,
  email: PropTypes.string,
  url: PropTypes.string,
  isEditShown: PropTypes.bool,
  handleDisplayEdit: PropTypes.func,
  id: PropTypes.number,
  handleUpdateContact: PropTypes.func
}

export default AddContact