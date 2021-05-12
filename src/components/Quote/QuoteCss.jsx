import styled from 'styled-components';

const QuoteCss = styled.div`
  .QuoteContainer {
    display: flex;
    text-align: center;
    margin: auto;
    height: 220px;
    width: 85%;
    margin-top: 15px;
    border-spacing: 50px;
  }

  .Title h1 {
    color: #333333;
    text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .image {
    margin-top: 40px;
  }

  .quote {
    color: rgb(59, 59, 59);
    padding-top: 20px;
    margin-top: 20px;
    margin-left: 40px;
    font-family: 'Roboto', sans-serif;
    height: auto;
    font-size: 15px;
    border-radius: 30px;
    text-align: left;
  }

  .titlequote {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  ul {
    list-style: url('./rocket.svg');
  }
  .p-quote {
    margin-bottom: 20px;
  }
`;

export default QuoteCss;
