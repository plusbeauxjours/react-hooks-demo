import React from "react";
import Header from "./Header";
import { useFns, useSetLang, useT } from "../Hooks/context";

const Screen: React.FC = () => {
  const { logUserIn } = useFns();
  const setLang = useSetLang();
  const t = useT();
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
      <h1>{t("Hello!")}</h1>
      <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </div>
  );
};

export default Screen;
