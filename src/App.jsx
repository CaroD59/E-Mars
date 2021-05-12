import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import NextPage from './components/NextPage/NextPage';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  const StyleApp = styled.div`
  background - color: #ebecf0;
  margin: 0;
  `;
  return (
    <StyleApp>
      <Reset />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/NextPage">
            <NextPage />
          </Route>
        </Switch>
      </div>
    </StyleApp>
  );
}
