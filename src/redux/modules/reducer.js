//action value
const ADD = 'add';
const DEL = 'del';
const MOVE = 'move';

//초기값
const initialState = [
  {
    id: 0,
    title: '너 바보니?',
    content: '엉 나 바보야',
    isDone: false,
  },
  {
    id: 1,
    title: '똑바로해',
    content: '미안',
    isDone: true,
  },
];

//action create
export const createAdd = (title, content) => {
  return {
    type: ADD,
    title,
    content,
  };
};

//삭제버튼aciton creator-------------------------
export const createDel = (id) => {
  //console.log(id);
  return {
    type: DEL,
    id,
  };
};

//----------------------------------------------
export const moveDodone = (id, isDone) => {
  return {
    type: MOVE,
    id,
    isDone,
  };
};

//reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { id: Date.now(), title: action.title, content: action.content, isDone: false },
      ];
    case DEL:
      return state.filter((item) => item.id !== action.id);
    case MOVE:
      return state.map((todo) => {
        console.log(todo);
        console.log(action);
        if (todo.id === action.id) {
          return { ...todo, isDone: action.isDone };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todolist;

//값을 return하면 그 자리에 리턴값만 남고 뿅 사라진다.(리턴문 구역만{})
