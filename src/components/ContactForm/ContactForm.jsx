import { useState } from 'react';

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
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Write your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="message">
        Message :
        <input
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
  );
}
