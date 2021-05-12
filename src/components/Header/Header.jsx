import React from 'react';
import HeaderCss from './HeaderCss';

function Header() {
  return (
    <HeaderCss>
      <div>
        <img src="robot.png" alt="logo" className="logo" />
      </div>
    </HeaderCss>
  );
}

export default Header;
