import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

export const MainBox = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #d2d2d2;
  border-radius: 15px;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
`;
export const InsideWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #bdbdbd;
`;

export const MyInput = styled.input`
  width: 40%;
  height: 50px;
  padding-left: 20px;
  /* text-align: center; */
  border: none;
  :focus {
    outline: none;
  }
`;

export const BTN = styled.button`
  width: 150px;
  height: 40px;
  border: 2px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
`;
