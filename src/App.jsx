import styled from 'styled-components';
import React from 'react';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const StyleApp = styled.div`
    background-color: #ebecf0;
  `;
  return (
    <StyleApp>
      <div className="App">
        <Header />
        <ContactForm />
      </div>
    </StyleApp>
  );
}

export default App;
