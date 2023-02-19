import styled from 'styled-components';

export const StyledAuthMenu = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-weight: 500;
  .authLink {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    outline: none;
    border-radius: 10px;
    :hover,
    :focus {
      color: white;
      background-color: #a3b18a;
      box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;