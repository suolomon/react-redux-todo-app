import React from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import {setCheck} from '../features/todoSlice'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: white;
  margin: 6px 4px;
  height: 40px; 
  border-radius: 12px;
`;
const Paragraph = styled.p`
 flex; 1;
`;

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(setCheck(id))
  };
  return (
    <Container>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "arial-label": "secondary checked" }}
      />
      <Paragraph>{name}</Paragraph>
    </Container>
  );
};

export default TodoItem;
