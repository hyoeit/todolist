import "./App.css";
import React, { useState, useRef, useCallback } from 'react';
import Add from './components/add/add';
import Header from './components/header/header';
import List from './components/list/list';

function App() {
  
  const [todos, setTodos] = useState(
    [ {
      id : '1',
      text : '리액트 공부하기',
      checked: true,
      star: false,
    },
    {
      id : '2',
      text : '글쓰기',
      checked: true,
      star: false,
    },
    {
      id : '3',
      text : '운동하기',
      checked: true,
      star: false,
    },]
  )

  const textDelete = (id) => {
    setTodos(todos.filter( todo => todo.id !== id))
  }
  // setTodos(Object.keys(todos).filter(key=>todos[key].id !== e.target.id)) Object object로 state를 작성했을 때 왜 삭제안되는지, 실력 쌓이면 꼭 확인하기


  
  const textAdd = ( todo ) => {
    const updated = [...todos, todo];
    setTodos(updated)
  }

  const onCheck = (checked) => {
    
  }
  



  return (
    <div className="App">
      <div className="container">
        <Header />
        <Add textAdd={textAdd}/>
        <List todos={todos} textDelete={textDelete} onCheck={onCheck} />
      </div>
    </div>
  );
}

export default App;
