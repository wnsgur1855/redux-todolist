import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAdd } from '../redux/modules/reducer';
import { createDel } from '../redux/modules/reducer';
import { moveDodone } from '../redux/modules/reducer';

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

const largeBox = {
  width: '1000px',
  height: '200px',
  backgroundColor: 'red',
  border: '5px solid',
  borderRadius: '50px',
  display: 'flex',
  textAlign: 'center',
};

const smallBox = {
  border: '3px solid blue',
  width: '200px',
  height: '200px',
  backgroundColor: 'white',
  borderRadius: '50px',
};

const fontsize = {
  width: '10px',
  height: '10px',
};

const detailBox = {};

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
  //추가버튼
  const handleAdd = () => {
    dispatch(createAdd(title, content));
  };
  //hadleAdd에 인자값을 안 넣어준 이유는 밑에서 안 넣어줬기 때문에
  //-----------------------------------------------------------------------------
  //삭제버튼
  const handleDel = (id) => {
    alert('안');
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
      <div className="topContainer">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="title">
        제목 &nbsp;
        <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
        내용 &nbsp;
        <input
          value={content}
          onChange={handleContentChange}
          className="inputter"
          type="text"
        />{' '}
        &nbsp;
        <button onClick={handleAdd}>추가</button>
      </div>
      <div>
        <h2>Working..</h2>
        <div style={largeBox}>
          {data.map((item, i) => {
            if (item.isDone === false) {
              return (
                <div style={smallBox} key={item.id}>
                  <div style={fontsize}>{item.title}</div>
                  <h6 style={fontsize}>{item.content}</h6>
                  <button onClick={() => handleDel(data[i].id)}>삭제</button>
                  <button
                    onClick={() => {
                      movehandler(data[i].id, data[i].isDone);
                    }}
                  >
                    추가
                  </button>
                  <button
                    style={detailBox}
                    onClick={() => {
                      navigate(`/${item.id}`);
                      //navigate('/detail/${item.id}');
                    }}
                  >
                    상세페이지
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
      <h1>Done</h1>
      {data.map((item, i) => {
        if (item.isDone === true) {
          return (
            <div style={smallBox} key={item.id}>
              <div style={fontsize}>{item.title}</div>
              <h6 style={fontsize}>{item.content}</h6>
              <button onClick={() => handleDel(data[i].id)}>삭제</button>
              <button
                onClick={() => {
                  movehandler(data[i].id, data[i].isDone);
                }}
              >
                추가
              </button>
              <button
                style={detailBox}
                onClick={() => {
                  navigate('/detail');
                  //navigate('/detail/${item.id}');
                }}
              >
                상세페이지
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Home;
