import "./app.css";
import React, { useState } from 'react';
import Add from './components/add/add';
import Header from './components/header/header';
import List from './components/list/list';
import Login from './components/login/login';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App({authService}) {
  
  const [todos, setTodos] = useState(
    []
  )

  const textDelete = (id) => {
    setTodos(todos.filter( todo => todo.id !== id))
  }
  // setTodos(Object.keys(todos).filter(key=>todos[key].id !== e.target.id)) Object object로 state를 작성했을 때 왜 삭제안되는지, 실력 쌓이면 꼭 확인하기


  
  const textAdd = ( todo ) => {
    const updated = [...todos, todo];
    setTodos(updated)
  }

  const onCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo))
  }

  const onStar = (id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, star: !todo.star} : todo))
  }

  return (
    <div className="App">
      <HashRouter >
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/note">
          <div className="container">      
          <Header authService={authService}/>
          <Add textAdd={textAdd}/>
          <List todos={todos} textDelete={textDelete} onCheck={onCheck} onStar={onStar} /> 
          </div>
        </Route>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
