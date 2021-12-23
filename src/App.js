import React from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

const AppContainer = styled.div`
  height: 700px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(232, 234, 237);
  border-radius: 12px;
  padding:12px 0;
`;

const AppTodoContainer = styled.div`
 flex: 1;
 width: 100%; 
 display: flex; 
 flex-direction: column; 
 align-items: center;
`;

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <AppContainer>
        <AppTodoContainer>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </AppTodoContainer>
      <Input />
      </AppContainer>
    </div>
  );
}

export default App;
