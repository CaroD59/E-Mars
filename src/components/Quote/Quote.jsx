import React from 'react';
import QuoteCss from './QuoteCss';

function Quote() {
  return (
    <QuoteCss>
      <div className="Title">
        <h1>WELCOME TO MARS</h1>
      </div>
      <div className="QuoteContainer">
        <div className="image">
          <img src="background2.png" alt="background" />
        </div>
        <div className="quote">
          <h1 className="titlequote">The Three Laws of Robotics</h1>
          <ul>
            <li className="p-quote">
              A robot may not injure a human being or, through inaction, allow a
              human being to come to harm
            </li>
            <li className="p-quote">
              A robot must obey the orders given it by human beings except where
              such orders would conflict with the First Law
            </li>
            <li className="p-quote">
              A robot must protect its own existence as long as such protection
              does not conflict with the First or Second Law
            </li>
          </ul>
          <p>Isaac Asimov, I, Robot</p>
        </div>
      </div>
    </QuoteCss>
  );
}

export default Quote;
