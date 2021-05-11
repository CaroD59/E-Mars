import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Message from './components/Message';
// import styled from 'styled-components';

export default function App() {
  const [emessages, setEmessages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/messages`).then(({ data }) => {
      setEmessages(data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {emessages.map((emessage) => {
            return <Message {...emessage} />;
          })}
        </Route>
      </Switch>
    </div>
  );
}
