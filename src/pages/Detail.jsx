import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Home from './Home';

function Detail() {
  const data = useSelector((state) => {
    return state.todolist;
  });

  const params = useParams(); //useParams의 사용용도: url의 파라미터 값을 가져오기 위해서이다.
  const founddata = data.find((item) => {
    return item.id === Number(params.id);
  });
  console.log('id', founddata);
  //founddata: {id: 2, title: '점심 먹기', body: '점심 뭐먹지..?', isDone: false}
  // founddata.title

  return (
    <>
      {/* <h3>{founddata.id}</h3>
      <h3>{founddata.title}</h3>
          <h3>{founddata.content}</h3> */}
      <div>
        <h1>할 일: {founddata.title}</h1>
        <h2>내용: {founddata.body}</h2>
        <h3>ID: {founddata.id}</h3>
      </div>
    </>
  );
}

export default Detail;
