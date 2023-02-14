//action value
const ADD = 'add';
const DEL = 'del';
const MOVE = 'move';

//초기값
const initialState = [
  {
    id: 1,
    title: '리액트 강의보기',
    body: '챕터 1부터 챕터 12까지 학습',
    isDone: false,
  },
  {
    id: 2,
    title: '점심 먹기',
    body: '점심 뭐먹지..?',
    isDone: false,
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
        { id: Date.now() + 1, title: action.title, content: action.content, isDone: false },
      ];
    case DEL:
      return state.filter((item) => item.id !== action.id);
    case MOVE:
      return state.map((todo) => {
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
