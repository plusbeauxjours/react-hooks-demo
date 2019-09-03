import React from "react";
import { useUser, useT } from "../Hooks/context";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div``;

const Header: React.FC = () => {
  const { name, loggedIn } = useUser();
  const t = useT();
  return (
    <Container>
      <Item>
        {t("Hello!")}, {name}, you are {loggedIn ? "logged in" : "anonymous"}
      </Item>
    </Container>
  );
};

export default Header;
