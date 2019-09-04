import React from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const Input = () => {
  const noAt = (value: any) => !value.includes("@");
  const name = useInput("Mr.", noAt);
  return (
    <Container>
      <input placeholder="Name" {...name} />
    </Container>
  );
};

export default Input;
