import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { useFns, useSetLang, useT } from "../Context/context";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const Item = styled.div`
  margin-top: 10px;
`;
const Btn = styled.button``;

const Context: React.FC = () => {
  const { logUserIn } = useFns();
  const setLang = useSetLang();
  const t = useT();
  return (
    <Container>
      <ScreenHeader />
      <Item>
        <Btn onClick={logUserIn}>Log user in</Btn>
        <Btn onClick={() => setLang("es")}>{t("Context")}</Btn>
      </Item>
    </Container>
  );
};

export default Context;
