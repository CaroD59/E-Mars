// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sdiv = styled.div`
  margin-top: 20px;
  margin-left: 422px;
  display: flex;
  height: 45px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebecf0;
  width: 40%;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  transition: margin-right 2s;
  appearance: none;

  .text {
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.2px;
    color: rgb(59, 59, 59);
  }

  .bold {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.2px;
    color: rgb(59, 59, 59);
  }
`;

function Message({ name, emessage }) {
  return (
    <Sdiv>
      <p className="bold">{name}</p>
      <p className="text">{emessage}</p>
    </Sdiv>
  );
}

Message.propTypes = {
  emessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
