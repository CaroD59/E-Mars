import styled from 'styled-components';

const HeaderCss = styled.div`
  display: flex;
  background-color: #c2bcb2;
  height: 200px;
  width: 90%;
  margin: auto;
  margin-top: 15px;
  border: #000 1px solid;

  .logo {
    height: 170px;
    width: 170px;
    margin-top: 15px;
    margin-left: 15px;
    border: #000 1px solid;
  }

  .Title h1 {
    font-size: 60px;
    padding-top: 25px;
    margin-left: 400px;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-shadow: 3px 2px #000;
  }
`;

export default HeaderCss;
