// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function Message({ auteur, message }) {
  return (
    <p>
      hello Percy, Im {auteur}, {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  auteur: PropTypes.string.isRequired,
};

export default Message;
