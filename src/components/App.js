
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList";
import { uuid } from "uuidv4";
import './App.css';

function App() {
const [contacts , setContacts] = useState([]);
const LOCAL_STORAGE_KEY= "contacts";

const addContactHandler = (contact)=>{
 
  setContacts([...contacts,{id: uuid(), ...contact}]);
};

const removeContactHandler = (id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id!==id;
  });
  setContacts(newContactList);
};
useEffect(()=>{
const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,)); //after getting the data from the local storage we need to store in a local variable
if(retriveContacts) setContacts(retriveContacts);
}, []);
useEffect(()=>{   //for soring data in local storage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

  return (<div className="ui container">

      <Header />
    <AddContact addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>

   
  </div>
   
   
  );
}

export default App;
