import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;

  & > header {
    font-size: 14px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: #ffffff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666666;
    }
  }
`;
