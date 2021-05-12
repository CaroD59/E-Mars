import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import ContactForm from './components/ContactForm/ContactForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Quote from './components/Quote/Quote';
import MessageGallery from './components/MessageGallery';

export default function App() {
  const StyleApp = styled.div`
    background-color: #ebecf0;
    margin: 0;
    overflow: hidden;
  `;
  return (
    <StyleApp>
      <Reset />
      <div className="App">
        <Header />
        <Quote />
        <ContactForm />
        <Footer />
        <Switch>
          <Route exact path="/">
            <MessageGallery />
          </Route>
        </Switch>
      </div>
    </StyleApp>
  );
}
