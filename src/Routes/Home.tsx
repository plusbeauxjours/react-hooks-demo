import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const Home = () => (
  <Container>
    <h1>YO</h1>
  </Container>
);

export default Home;
