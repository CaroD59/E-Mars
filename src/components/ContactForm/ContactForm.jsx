import { useState } from 'react';
import StyleContactForm from './StyleContactForm';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const display = (e) => {
    e.preventDefault();
    setUserMessage('');
    alert('Your message has been sent o/ !');
    setUserMessage([userMessage]);
    console.log(`${name} + ${userMessage}`);
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
          <button type="submit" onClick={display}>
            Submit
          </button>
        </form>
      </div>
    </StyleContactForm>
  );
}
