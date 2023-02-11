import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  border: none;
  :focus {
    outline: none;
  }
`;
