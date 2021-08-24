import "./app.css";
import React, { useState, useRef, useCallback } from 'react';
import Add from './components/add/add';
import Header from './components/header/header';
import List from './components/list/list';

function App() {
  
  const [todos, setTodos] = useState(
    {
      '1': {
        id : '1',
        text : '리액트 공부하기',
        checked: true,
        star: false,
      },
      '2': {
        id : '2',
        text : '글쓰기',
        checked: true,
        star: false,
      },
      '3': {
        id : '3',
        text : '운동하기',
        checked: true,
        star: false,
      },
    }
  )

  const textDelete = e => {
    setTodos(Object.keys(todos).filter(key=>todos[key].id !== e.target.id))
  }
  
  
  // useCallback(
  //   id => {
  //     setTodos(Object.keys(todos).filter( key => todos[key].id !== id)); // 클릭되지 않은 나머지만 추출하여 새로운 배열 생성
  //   },
  //   [todos]
  // );
 

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Add />
        <List todos={todos} textDelete={textDelete} />
      </div>
    </div>
  );
}

export default App;
