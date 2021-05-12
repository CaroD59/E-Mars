import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Quote from '../Quote/Quote';

export default function MainPage() {
  const StyleMainPage = styled.div`
  background - color: #ebecf0;
  margin: 0;
  `;
  return (
    <StyleMainPage>
      <Reset />
      <Header />
      <Quote />
      <ContactForm />
      <Footer />
    </StyleMainPage>
  );
}
