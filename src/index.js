import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

import './index.css';

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/contact_list' component={ContactList} />
    <Route exact path='/add_contact' component={AddContact} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
