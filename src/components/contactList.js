import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contacts from './contacts'
import ContactNew from './contactNew'
import ContactInformation from './contactInformation'
import ContactEdit from './contactEdit'
import 'bootstrap/dist/css/bootstrap.css';


const ContactList = ({contacts, addContact, updateContact, deleteContact}) => (


    <Switch>

        <Route path='/contacts/new' render={(routerProps) => (
          <ContactNew history = {routerProps.history} contacts={contacts} addContact={addContact} />
          )}/>

          <Route path='/contacts/:id/edit' render={(routerProps) => (
              <ContactEdit history={routerProps.history} contactId={(routerProps.match.params.id)} contacts={contacts} updateContact={updateContact} />
              )}/>

        <Route path='/contacts/:id' render={(routerProps) => (
          <ContactInformation contactId={(routerProps.match.params.id)} contacts={contacts} />
          )}/>

          <Route path ='/contacts' render={() => (
            <Contacts contacts ={contacts} deleteContact={deleteContact} />
          )}/>

      </Switch>

)

export default ContactList
