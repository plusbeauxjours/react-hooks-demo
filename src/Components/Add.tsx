import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "../Context/context";
import { ADD } from "../actions";

const Form = styled.form`
  margin-top: 10px;
`;

const Input = styled.input``;

const Add: React.FC = () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (newToDo !== "") {
      dispatch({ type: ADD, payload: newToDo });
      setNewToDo("");
    }
  };
  const onChange = (e: any) => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </Form>
  );
};

export default Add;
