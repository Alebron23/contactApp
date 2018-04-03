import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom'

import App from './App';
import ContactList from './components/contactList/ContactList';
import AddContact from './components/AddContact';
import Contact from './components/contactList/Contact';

import './index.css';

// <Switch> will make the path matching exclusive rather than inclusive (as if you were using <Route> components).
// Redirect is the default route, so if no others match, it will go to that one. 
// When a component is rendered by the router, three properties are passed as parameters: match, location, history
ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/contact_list' component={ContactList} />
    <Route path='/add_contact' component={AddContact} />
    <Route path='/contact/:id' component={Contact} />
    <Redirect to='/' />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
