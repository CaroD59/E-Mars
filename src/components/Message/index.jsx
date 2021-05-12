// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function Message({ name, emessage }) {
  return (
    <p>
      hello Percy, Im {name}, {emessage}
    </p>
  );
}

Message.propTypes = {
  emessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
