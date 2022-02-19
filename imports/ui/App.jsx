import React from 'react';
import {ContactForm} from "./ContactForm"
import {ContactList} from "./ContactList"

export const App = () => (
  <div>
    <h1>UK Wallet!</h1>
    <ContactForm></ContactForm>
      <ContactList/>
  </div>
);
