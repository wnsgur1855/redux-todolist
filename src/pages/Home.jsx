import Working from '../components/todolist';
import InputBox from '../components/input';
import { StWorkingDone, StWorkingDoneBox, StmyTodoList } from '../components/styled';

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

function Home() {
  return (
    <div>
      <StmyTodoList>My Todo List</StmyTodoList>
      <InputBox />
      <StWorkingDoneBox>
        <div>
          <Working title="Working..😎 " isDone={false} />
        </div>
        <>
          <Working title="Done...😌" isDone={true} />
        </>
      </StWorkingDoneBox>
    </div>
  );
}

export default Home;
//props로 title만 쓰고 보내도 그 안의 값만 변경해도 됐었꾸나
