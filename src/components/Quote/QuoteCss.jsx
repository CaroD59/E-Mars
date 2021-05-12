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

  .quote {
    font-style: italic;
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

  .p-quote {
    margin-bottom: 20px;
  }
`;

export default QuoteCss;
