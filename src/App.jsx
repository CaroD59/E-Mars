import styled from 'styled-components';
import React from 'react';
import { Reset } from 'styled-reset';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Quote from './components/Quote/Quote';

function App() {
  const StyleApp = styled.div`
    background-color: #ebecf0;
    margin: 0;
  `;
  return (
    <StyleApp>
      <Reset />
      <div className="App">
        <Header />
        <Quote />
        <ContactForm />
        <Footer />
      </div>
    </StyleApp>
  );
}

export default App;
