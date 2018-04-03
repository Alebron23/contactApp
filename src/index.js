import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import ContactList from './components/contactList/ContactList';
import AddContact from './components/AddContact';
import Contact from './components/contactList/Contact';

import './index.css';

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/contact_list' component={ContactList} />
    <Route path='/add_contact' component={AddContact} />
    <Route path='/contact:id' component={Contact} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
