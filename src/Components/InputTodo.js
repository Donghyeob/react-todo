import React, { useRef, useState } from 'react';
import ItemList from './ItemList';

const InputTodo = () => {
  const [inputText, setInputText] = useState('');
  const [todoItem, setTodoItem] = useState([]);
  const [counter, setCounter] = useState(0);
  const [checkedItem, setCheckedItem] = useState([]);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  }
  const addTodo = () => {
    setCounter(counter + 1);
    !inputText
      // 데이터 없는건 alert를 출력
      ? setTodoItem([...todoItem, { id: counter.toString(), text: '데이터가 없음' }])
      : setTodoItem([...todoItem, { id: counter.toString(), text: inputText }]);
    setInputText('');
    inputRef.current.focus();
  }
  const delTodo = () => {
    console.log(todoItem);
    setTodoItem(
      todoItem.filter(
        check => !checkedItem.includes(check.id)
      )
    );
    // setCheckedItem([]); // itemlist에 checked state 초기화 방안 생각해야됨
  }

  return (
    <>
      <input value={inputText} ref={inputRef} onChange={onChangeInput} />
      <button onClick={addTodo}>Add</button>
      <button onClick={delTodo}>Del</button>
      <div>
        {/* {todoItem.map((data, index) => (
          <li key={index}>{data}</li>
        ))} */}
        <ItemList data={todoItem} setCheckedItem={setCheckedItem} />
      </div>
    </>
  )
}

export default InputTodo;

// 문제점
// 1. checkedItem 과 checked가 중복되는 일을 함
// 2. data가 계속 축적되는 구조임
// 3. id 값의 sorting이 안됨
// 4. key 값을 data length로 잡으면 id counter를 따로 줄 필요가 없음
// 5. state는 관리 component쪽에 일괄 관리

// 다음과제
// 1. antd table에 출력
// 2. 중복 데이터는 안들어가게