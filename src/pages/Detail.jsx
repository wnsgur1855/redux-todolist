import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';


function Detail() {
  const data = useSelector((state) => {
    return state.todolist;
  });

  const navigate = useNavigate();

  //어떤 데이터인지 찾아보기
  const params = useParams(); //useParams의 사용용도: url의 파라미터 값을 가져오기 위해서이다.
  const founddata = data.find((item) => {
    console.log('params파람스', params);
    console.log('item아이템', item);
    return item.id === Number(params.id);
  });

  //console.log('id', founddata);
  //founddata: {id: 2, title: '점심 먹기', body: '점심 뭐먹지..?', isDone: false}
  // founddata.title

  const buttonHandler = () => {
    navigate('/detail');
  };

  return (
    <>
      {/* <h3>{founddata.id}</h3>
      <h3>{founddata.title}</h3>
          <h3>{founddata.content}</h3> */}
      <div>
        <h1>할 일: {founddata.title}</h1> <br />
        <h2>내용: {founddata.body}</h2>
        <br />
        <h3>ID: {founddata.id}</h3>
        <br />
        <button onClick={buttonHandler}>누르지마셔요</button>
      </div>
    </>
  );
}

export default Detail;
