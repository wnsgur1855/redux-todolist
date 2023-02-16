import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createDel } from '../redux/modules/reducer';
import { moveDodone } from '../redux/modules/reducer';
import {
  StIngBox,
  StMapBox,
  StMapInputBox,
  StMapButtons,
  StOneButton,
  StWorkingDone,
} from './styled';

function Working({ title, isDone }) {
  //useSelector사용으로 store들어가는 열쇠 생김 store만든정보를 가져온다
  const data = useSelector((state) => {
    return state.todolist;
  });
  //usedispath로 store로 액션type던지기----------------------------------------------------------------------
  const dispatch = useDispatch();
  //navigate사용----------------------------------------------------------------------
  const navigate = useNavigate();
  //삭제버튼----------------------------------------------------------------------
  const handleDel = (id) => {
    alert('삭제시켜드려요');
    dispatch(createDel(id));
  };
  //이동 버튼----------------------------------------------------------------------
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
  //-----------------------------------------------------------------------------

  return (
    <div>
      <StWorkingDone>{title}</StWorkingDone>
      <StIngBox>
        {data.map((item) => {
          if (item.isDone === isDone) {
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
  );
}

export default Working;
