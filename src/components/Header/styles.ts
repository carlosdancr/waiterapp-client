import styled from 'styled-components';

export const Header = styled.header`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D73035;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 6px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.9;
    }
  }
`;
