import styled from 'styled-components';

const StyleContactForm = styled.div`
  background-color: #ebecf0;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.2px;
  height: 100vh;
  width: 100vw;
  form {
    font-size: 16px;
    padding: 50px 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    border: none;
    text-align: center;
    background-color: #ebecf0;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: 16px;
    margin-right: 8px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    height: 45px;
    box-sizing: border-box;
    transition: margin-right 2s;
    appearance: none;
    -webkit-appearance: none;
    text-shadow: 1px 1px 0 #fff;
  }
  input:focus,
  input:hover {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    outline: none;
  }
  textarea {
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    font-size: 16px;
    padding-top: 10px;
    border: none;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    text-align: center;
    background-color: #ebecf0;
    border-radius: 30px;
    width: 590px;
    height: 212px;
    text-shadow: 1px 1px 0 #fff;
  }
  textarea:hover,
  textarea:focus {
    outline: none;
  }
  button {
    font-family: 'Roboto', sans-serif;
    letter-spacing: normal;
    margin-top: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #ae1100;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    width: 175px;
    height: 45px;
  }
  button:hover,
  button:focus {
    outline: none;
    cursor: pointer;
  }
  button:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    transform: translateY(4px);
  }
  .title {
    padding: 32px 0;
    text-align: center;
    color: #babecc;
    text-shadow: 3px 1px 1px #fff;
    font-weight: 700;
    font-size: 36px;
  }
`;

export default StyleContactForm;
