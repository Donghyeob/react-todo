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
      ? setTodoItem([...todoItem, { id: counter.toString(), text: '데이터가 없음' }])
      : setTodoItem([...todoItem, { id: counter.toString(), text: inputText }]);
    setInputText('');
    inputRef.current.focus();
  }
  const delTodo = () => {
    console.log(checkedItem.slice());
    console.log(todoItem);
    setTodoItem(
      todoItem.filter(
        check => !checkedItem.includes(check.id)
      )
    );
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