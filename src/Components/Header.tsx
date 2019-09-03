import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

const Item = styled.div`
  text-decoration: underline;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Home = () => (
  <Container>
    <Item>
      <Link to={"/context"}>CONTEXT</Link>
    </Item>
    <Item>
      <Link to={"/reducer"}>REDUCER</Link>
    </Item>
  </Container>
);

export default Home;
