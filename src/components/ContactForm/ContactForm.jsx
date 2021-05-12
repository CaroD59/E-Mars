import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import StyleContactForm from './StyleContactForm';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const history = useHistory();

  const display = (e) => {
    e.preventDefault();
    setUserMessage('');

    setUserMessage([userMessage]);
    history.push('/NextPage');
  };

  return (
    <StyleContactForm>
      <div>
        <form>
          <div className="title">Contact</div>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Type your message here"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </label>

          <Link to="/NextPage">
            <button type="submit" onClick={display}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </StyleContactForm>
  );
}
