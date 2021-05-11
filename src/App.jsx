// import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import MessageGallery from './components/MessageGallery';
// import styled from 'styled-components';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MessageGallery />
        </Route>
      </Switch>
    </div>
  );
}
