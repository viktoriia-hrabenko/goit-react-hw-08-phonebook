import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  .listItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
  }
  li:nth-child(odd) {
    background-color: rgb(245, 245, 245);
  }
  .notification {
    font-size: 18px;
    text-align: center;
  }
`;
