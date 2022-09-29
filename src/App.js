import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const initialState = contactsJSON;
  const [contacts , setContact] = useState(initialState);
  
  const handleClick = (contact) => {
    setContact([...contacts, { name: contact.name, phone: contact.phone, email: contact.email, photo: contact.photo}]);
  };

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="container-data">
          <ContactForm handleClick={handleClick} />
        </div>
        <div className="container-data">
           {contacts.map((contact, index) => {
              return (
                <Contact data={contact} index={index} />
              )
            })}
        </div>
      </div>
      
    </div>
  );
};

export default App;
