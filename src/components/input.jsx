import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StAddButton, StAllBox, StTitleContentBox, StP, StInputBox } from './styled';
import { createAdd } from '../redux/modules/reducer';

function InputBox() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //content
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.todolist;
  });

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

  return (
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
  );
}
export default InputBox;
