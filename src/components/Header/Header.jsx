import React from 'react';
import HeaderCss from './HeaderCss';

function Header() {
  return (
    <HeaderCss>
      <div>
        <img src="robot.png" alt="logo" className="logo" />
      </div>
      <div className="Title">
        <h1>WELCOME TO MARS</h1>
      </div>
    </HeaderCss>
  );
}

export default Header;
