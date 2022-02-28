import React from 'react';
import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';
import './style.css';

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-main">
        <ContactForm />
      </main>
    </>
  );
}

export default Contact;