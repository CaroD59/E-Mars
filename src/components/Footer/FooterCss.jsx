import styled from 'styled-components';

const StyledFooter = styled.div`
  width: auto;
  margin: auto;
  background-color: #c9ccd9;

  a {
    color: black;
    text-decoration: none;
  }
  .contact h1 {
    font-weight: bold;
    line-height: 26px;
    font-size: 18px;
    color: black;
  }
  a:hover {
    color: rgb(59, 59, 59);
  }
  .bloc {
    display: flex;
    justify-content: flex-end;
  }

  .bloc div {
    margin: 19px 47px;
  }

  img {
    width: 40px;
  }
  .infos {
    font-weight: bold;
  }
  h3 {
    margin-top: 10px;
  }
`;
export default StyledFooter;
