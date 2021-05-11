import styled from 'styled-components';

const HeaderCss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #c2bcb2;
  height: 200px;
  width: auto;
  margin: auto;

  .logo {
    height: 350px;
    width: auto;
    margin-left: 0px;
  }

  .Title h1 {
    color: #333333;
    text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default HeaderCss;
