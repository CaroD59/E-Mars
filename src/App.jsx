import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <div className="App">
      <Header />
      <Quote />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
