import styled from 'styled-components';

export const StmyTodoList = styled.div`
  width: 90%;
  height: 50px;
  margin-left: 20px;
  font-size: x-large;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 128, 0.5);
  border-radius: 500px;
`;

export const StAllBox = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 3px solid;
  border-radius: 20px;
`;

export const StP = styled.p`
  font-family: 'KyoboHandwriting2021sjy';
  margin-bottom: 25px;
`;

export const StTitleContentBox = styled.div`
  gap: 10px;
  display: flex;
  margin-top: 10px;
`;

export const StInputBox = styled.input`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 10px;
`;
export const StAddButton = styled.button`
  font-family: 'KyoboHandwriting2021sjy';
  display: block;
  background-color: rgba(255, 255, 128, 0.5);
  margin-top: 10px;
  margin-left: 150px;
  width: 100px;
  height: 40px;
  font-size: 1.1rem;
  color: red;
  align-items: center;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

export const StWorkingDoneBox = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 90%;
  height: 80%;
  background-color: wheat;
  border: 3px solid yellow;
  border-radius: 20px;
`;

export const StIngBox = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  text-align: center;
`;

export const StMapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid purple;
  width: 200px;
  height: 170px;
  background-color: rgba(255, 255, 128, 0.5);
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
`;

export const StWorkingDone = styled.h2`
  margin-left: 10px;
`;

export const StMapButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
  justify-content: space-between;
  border-radius: 20px;
`;

export const StOneButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 70px;
  background-color: rgba(255, 255, 128, 0.5);
  border: none;
  font-size: large;
`;

export const StMapInputBox = styled.h3`
  font-family: 'KyoboHandwriting2021sjy';
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
