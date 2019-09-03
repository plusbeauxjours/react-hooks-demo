import React from "react";
import Add from "../Components/Add";
import styled from "styled-components";
import List from "../Components/List";
import { useToDos, useCompleted } from "../Context/context";
import ToDo from "../Components/ToDo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const ToDos = () => {
  const toDos = useToDos();
  const completed = useCompleted();
  return (
    <Container>
      <Add />
      <List name={"To Do"}>
        {toDos.map((toDo: any) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo: any) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </Container>
  );
};

export default ToDos;
