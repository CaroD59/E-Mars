import { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Message from '../Message';
// import styled from 'styled-components';

export default function MessageGallery() {
  const [emessages, setEmessages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/messages`).then(({ data }) => {
      setEmessages(data);
    });
  }, []);

  return (
    <div className="App">
      {emessages.map((emessage) => {
        console.log(emessage);
        return <Message {...emessage} />;
      })}
    </div>
  );
}
