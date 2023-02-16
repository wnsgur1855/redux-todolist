import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAdd } from '../redux/modules/reducer';
import { createDel } from '../redux/modules/reducer';
import { moveDodone } from '../redux/modules/reducer';
import styled from 'styled-components';

//배열을 접근하는 방법
/*[
  0: {id:1, title:'dnkfd', content:'askjfd', isDon:false}
  1: {id:2, title:'dnkfd', content:'askjfd', isDon:false}
]*/

//리액트에서 map을 쓰는 이유 for문은쓰면 안 된다
//spread를 쓰는 이유는 불변성을 유지하기 위해서, 리렌더링을 일으키기 위해서 불변성을 유지한다,
//data[0].isDon  data[3].content
//for() 리엑트에서 쓸수가 없다.
//map()
//...
//forEach

const StmyTodoList = styled.div`
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

const StAllBox = styled.div`
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

const StP = styled.p`
  font-family: 'KyoboHandwriting2021sjy';
  margin-bottom: 25px;
`;

const StTitleContentBox = styled.div`
  gap: 10px;
  display: flex;
  margin-top: 10px;
`;

const StInputBox = styled.input`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 10px;
`;
const StAddButton = styled.button`
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

const StWorkingDoneBox = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 90%;
  height: 80%;
  background-color: wheat;
  border: 3px solid yellow;
  border-radius: 20px;
`;

const StIngBox = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  text-align: center;
`;

const StMapBox = styled.div`
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

const StWorkingDone = styled.h2`
  margin-left: 10px;
`;

const StMapButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
  justify-content: space-between;
  border-radius: 20px;
`;

const StOneButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 70px;
  background-color: rgba(255, 255, 128, 0.5);
  border: none;
  font-size: large;
`;

const StMapInputBox = styled.h3`
  font-family: 'KyoboHandwriting2021sjy';
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //-----------------------------------------------------------------------------
  //useSelector사용으로 store들어가는 열쇠 생김 store만든정보를 가져온다
  const data = useSelector((state) => {
    return state.todolist;
  });
  //-----------------------------------------------------------------------------
  //usedispath로 store로 액션type던지기
  const dispatch = useDispatch();
  //-----------------------------------------------------------------------------
  //navigate사용
  const navigate = useNavigate();
  //-----------------------------------------------------------------------------
  //title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //-----------------------------------------------------------------------------
  //content
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  //-----------------------------------------------------------------------------
  //추가버튼 //input값이 있을때만 출력----------------------------------------
  const handleAdd = () => {
    if (title == '' || content == '') {
      alert('입력해');
    } else dispatch(createAdd(title, content));
    //추가하고나서 초기화 작업
    setTitle('');
    setContent('');
  };
  //hadleAdd에 인자값을 안 넣어준 이유는 밑에서 안 넣어줬기 때문에
  //-----------------------------------------------------------------------------
  //삭제버튼
  const handleDel = (id) => {
    alert('삭제시켜드려요');
    dispatch(createDel(id));
  };

  const movehandler = (id, isDone) => {
    dispatch(moveDodone(id, !isDone)); //--->이 인자는 action crateor에서 받아온 것. 이제 이것을 리듀서의 action에 담는다
  };
  //movehandler에 인자를 두 개 넣어 줬는데 밑에 개수만 같고 이름은 달라도 된다.
  // () => handleDel(id)
  // handleDel
  // 2가지의 차이점: 인자를 넘긴것과 넘기징 않은것.
  //----------------------------------------------------------------------------
  //기존에 액션생성함수를 만들어 놓는다
  //순서 : input을 만들고 전달해야할 값을 dispatch로 전달 (액션생성함수를 받는다) -> 리듀서로 넘긴다 -> action이 받는다. ->type을 확인하고 그 안으로 들어가서 return한다.
  return (
    <div>
      <StmyTodoList>My Todo List</StmyTodoList>
      <StAllBox>
        <StTitleContentBox>
          <StP>제목 </StP>
          <StInputBox value={title} onChange={handleTitleChange} type="text" />
        </StTitleContentBox>
        <StTitleContentBox>
          <StP>내용</StP>
          <StInputBox value={content} onChange={handleContentChange} type="text" />
        </StTitleContentBox>

        <StAddButton onClick={handleAdd}>추가</StAddButton>
      </StAllBox>
      <StWorkingDoneBox>
        <div>
          <StWorkingDone>Working..😎</StWorkingDone>
          <StIngBox>
            {data.map((item) => {
              if (item.isDone === false) {
                return (
                  <StMapBox key={item.id}>
                    <StMapInputBox>{item.title}</StMapInputBox>
                    <StMapInputBox>{item.content}</StMapInputBox>
                    <StMapButtons>
                      <StOneButton onClick={() => handleDel(item.id)}>❌</StOneButton>
                      <StOneButton
                        onClick={() => {
                          movehandler(item.id, item.isDone);
                        }}
                      >
                        ⭕
                      </StOneButton>
                      <StOneButton
                        onClick={() => {
                          navigate(`/${item.id}`);
                        }}
                      >
                        🐶
                      </StOneButton>
                    </StMapButtons>
                  </StMapBox>
                );
              }
            })}
          </StIngBox>
        </div>
        <>
          <StWorkingDone>Done..😌</StWorkingDone>
          <StIngBox>
            {data.map((item, i) => {
              if (item.isDone === true) {
                return (
                  <StMapBox key={item.id}>
                    <StMapInputBox>{item.title}</StMapInputBox>
                    <StMapInputBox>{item.content}</StMapInputBox>
                    <StMapButtons>
                      <StOneButton onClick={() => handleDel(data[i].id)}>❌</StOneButton>
                      <StOneButton
                        onClick={() => {
                          movehandler(data[i].id, data[i].isDone);
                        }}
                      >
                        ⭕
                      </StOneButton>
                      <StOneButton
                        onClick={() => {
                          navigate(`/${item.id}`);
                          //navigate('/detail/${item.id}');
                        }}
                      >
                        🐶
                      </StOneButton>
                    </StMapButtons>
                  </StMapBox>
                );
              }
            })}
          </StIngBox>
        </>
      </StWorkingDoneBox>
    </div>
  );
}

export default Home;
