import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessageGallery from './components/MessageGallery';


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