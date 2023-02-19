import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  .title {
    font-size: 32px;
    text-align: center;
  }
  .labelTitle {
    font-size: 24px;
    white-space: nowrap;
    margin-right: 20px;
  }
  .formLabel {
    display: flex;
    justify-content: space-between;
  }
  .inputTag {
    height: 35px;
    width: 70%;
    border: 2px solid lightgray;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
  }
`;