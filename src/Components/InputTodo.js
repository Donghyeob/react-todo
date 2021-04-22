import React, { useRef, useState } from 'react';
import ItemList from './ItemList';

const InputTodo = () => {
  const [inputText, setInputText] = useState('');
  const [todoItem, setTodoItem] = useState([]);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  }
  const addTodo = () => {
    !inputText
      ? setTodoItem([...todoItem, '데이터가 없음'])
      : setTodoItem([...todoItem, inputText]);
    setInputText('');
    inputRef.current.focus();
  }

  return (
    <>
      <input value={inputText} ref={inputRef} onChange={onChangeInput} />
      <button onClick={addTodo}>Add</button>
      <button>Del</button>
      <div>
        {/* {todoItem.map((data, index) => (
          <li key={index}>{data}</li>
        ))} */}
        <ItemList data={todoItem} />
      </div>
    </>
  )
}

export default InputTodo;